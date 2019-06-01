import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Splash from './src/screens/containers/splash.js'
import Login from './src/screens/containers/login.js'
import Home from './src/screens/containers/home.js'
import RoomDetails from './src/screens/containers/roomDetails.js'
import Loading from './src/sections/components/loading.js'
import {Provider} from 'react-redux'
import firebase from 'react-native-firebase';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store.js';
import {AsyncStorage} from 'react-native';
import renderIf from './renderIf';

var getUserId = false;

export default class App extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
    timePassed: false
    };
  }

  async componentDidMount(){
    await AsyncStorage.getItem('userId').then((id)=> {
      if(id !== null){
        getUserId = true;
      }else {
        getUserId = false;
      }
    });
    setTimeout( () => {
      this.setState({timePassed: true});
    },500);
    const rooms = await firebase.database().ref("rooms");
    var roomsList = [];
    await rooms.on('value',  (data) => {
      data.forEach((doc) =>{
        roomsList.push({
          key: doc.key,
          disabled: doc.toJSON().disabled,
          dislikes: doc.toJSON().dislikes,
          likes: doc.toJSON().likes,
          neighborhood: doc.toJSON().neighborhood,
          phone: doc.toJSON().phone,
          price: doc.toJSON().price,
          pictures: doc.toJSON().pictures,
          description: doc.toJSON().description,
          comments: doc.toJSON().comments
        });
      });
      store.dispatch({
        type: 'SET_ROOMS_LIST',
        payload:{
            roomsList
        }
      });
      roomsList = [];
    });
  }
  render(){
    if(this.state.timePassed){
      return (
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            {renderIf(getUserId == true, <Container/>)}
            {renderIf(getUserId == false, <ContainerLogin/>)}
          </PersistGate>
        </Provider>
      );
    }else{
      return(
        <View style = {styles.container}>
          <Image
          style = {styles.logo}
          source = {require('./assets/logo.png')}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F63E02',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: "55%",
    resizeMode: 'contain'
  },
});

const Navigator = createStackNavigator({
  Home: Home,
  RoomDetails: RoomDetails
});

const Container = createAppContainer(Navigator);

const NavigatorLogin = createStackNavigator({
  Splash: Splash,
  Login: Login,
  Home: Home,
  RoomDetails: RoomDetails
});

const ContainerLogin = createAppContainer(NavigatorLogin);
