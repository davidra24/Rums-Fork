import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import call from 'react-native-phone-call'
import firebase from 'react-native-firebase';
import Toast from 'react-native-simple-toast';

function InformationRoom(props){
  addLike = () => { firebase.database().ref('rooms/' + props.u_key).update({ likes: props.room_props.likes + 1 }); }
  addDisLike = () => { firebase.database().ref('rooms/' + props.u_key).update({ dislikes: props.room_props.dislikes + 1 }); }
  callForRoom = () => {call({number: props.room_props.phone, prompt: false}).catch(console.log('Error'))}
  return(
    <View style = {styles.container}>
      <View style = {styles.top}>
        <View style = {styles.left}>
          <Text style = {styles.price}> {props.room_props.price} </Text>
          <Text style = {styles.neighborhood}> {props.room_props.neighborhood} </Text>
        </View>
        <View style = {styles.right}>
          <TouchableOpacity
            style = {styles.right}
            onPress={this.addLike}>
            <Image
              style={styles.button}
              source={require('../../../assets/like.png')}
            />
            <Text style = {styles.likeText}>{props.room_props.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.right}
            onPress={this.addDisLike}>
            <Image
              style={styles.button}
              source={require('../../../assets/dislike.png')}
            />
            <Text style = {styles.likeText}>{props.room_props.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.bottom}>
        <Text
        style = {styles.description}>
          {props.room_props.description}
        </Text>
        <Button
          onPress={this.callForRoom}
          title= {"Llamar: " + props.room_props.phone}
          color='#F63E02'
          disabled={props.room_props.disabled}
        />
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
  top: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: '#ddd',
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
  },
  bottom:{
    padding: 10
  },
  description:{
    textAlign: 'justify',
    color: '#0A435F',
    marginBottom: 5
  }
})

export default InformationRoom;
