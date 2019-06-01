import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RoomDetails from '../../screens/containers/roomDetails.js'
import {store, persistor} from '../../../store.js';
import firebase from 'react-native-firebase';
var u_key = "";

function Room(props){
  addLike = () => { firebase.database().ref('rooms/' + props.u_key).update({ likes: props.likes + 1 });  }
  addDisLike = () => { firebase.database().ref('rooms/' + props.u_key).update({ dislikes: props.dislikes + 1 });  }
  showDetails = () => {
    u_key = props.u_key;
    store.dispatch({
      type: 'SET_ROOM_KEY',
      payload:{
          u_key
      }
    });
     props.navigation.navigate(
       'RoomDetails',
       {u_key: props.u_key}
     );
  }

  return(
    <View style = {styles.container}>
      <TouchableOpacity
        style = {styles.top}
        onPress={this.showDetails}>
        <Image
          style = {styles.picture}
          source = {{uri: props.pictures[0]}}
        />
      </TouchableOpacity>
      <View style = {styles.bottom}>
        <View style = {styles.left}>
          <Text style = {styles.price}> {props.price} </Text>
          <Text style = {styles.neighborhood}> {props.neighborhood} </Text>
        </View>
        <View style = {styles.right}>
          <TouchableOpacity
            style = {styles.right}
            onPress={this.addLike}>
            <Image
              style={styles.button}
              source={require('../../../assets/like.png')}
            />
            <Text style = {styles.likeText}>{props.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.right}
            onPress={this.addDisLike}>
            <Image
              style={styles.button}
              source={require('../../../assets/dislike.png')}
            />
            <Text style = {styles.likeText}>{props.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  top:{
    flex: 1,
  },
  picture:{
    width: "100%",
    height: 180,
    resizeMode: 'stretch'
  },
  bottom: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 0.5,
  },
  left:{
    flex: 1,
    padding: 5,
    alignItems: 'flex-start'
  },
  price:{
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#0A435F'
  },
  neighborhood:{
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#69DC02'
  },
  right:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button:{
    height: 25,
    width: 25
  },
  likeText:{
    color: '#0A435F',
    paddingLeft: 2,
    paddingRight: 20
  }
})

export default Room;
