import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import Home from './home.js'

class Splash extends Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    setTimeout(() => {
      const resetAction = StackActions.reset({
          index: 0,
          actions: [ NavigationActions.navigate({ routeName: 'Login'}) ]
        });
      this.props.navigation.dispatch(resetAction);
    }, 1500);
  }

  render(){
    return(
      <View style = {styles.container}>
      <Image
        style = {styles.logo}
        source = {require('../../../assets/logo.png')}
        />
        <Text style = {styles.phrase}>
          Residencias UPTC
        </Text>
      </View>
    );
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
  phrase:{
    paddingTop: 25,
    fontSize: 20,
    color: "white"
  }
})

export default Splash;
