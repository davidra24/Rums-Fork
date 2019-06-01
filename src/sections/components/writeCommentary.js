import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import firebase from 'react-native-firebase'
import {connect} from 'react-redux'
import Toast from 'react-native-simple-toast';
var commentaryText = "";
var textInput = "";
function mapStateToProps(state){
  var roomTmp = {};
  for (let i in state.roomsList) {
    if(state.roomsList[i].key == state.u_key){
      roomTmp = state.roomsList[i]
    }
  }
  return {
    comments: roomTmp.comments,
    u_key: state.u_key
  }
}

function WriteCommentary(props){
  addComment = () => {
    props.comments.unshift(commentaryText);
    firebase.database().ref('rooms/' + props.u_key).update({ comments:  props.comments});
    commentaryText = "";
    textInput.clear();
    Toast.show('Gracias por tu opinion!');
  }
  return(
    <View style = {styles.container}>
      <View style = {styles.left}>
        <TextInput
        ref={input => { textInput = input }}
        style = {styles.text_style}
        placeholder = "Escribe un comentario"
        onChangeText = {(typedText) => { commentaryText = typedText }}
        />
      </View>
      <View style = {styles.right}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.addComment}>
          <Text style = {styles.button_text}>
            Aceptar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginVertical: 4,
    marginLeft: 6,
    height: 45
  },
  left:{
    width: "75%"
  },
  text_style:{
    flex: 1 ,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    height: 25
  },
  right: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    padding: 10,
    backgroundColor: "#0A435F",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_text:{
    color: "#69DC02"
  }
})

export default connect(mapStateToProps)(WriteCommentary);
