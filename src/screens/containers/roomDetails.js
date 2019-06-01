import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Header from '../../sections/components/header.js'
import ImageSlider from '../../sections/components/imageSlider.js'
import InformationRoom from '../../sections/components/informationRoom.js'
import WriteCommentary from '../../sections/components/writeCommentary.js'
import CommentaryList from '../../sections/containers/commentaryList.js'
import {connect} from 'react-redux'
import firebase from 'react-native-firebase'

function mapStateToProps(state){
  var roomTmp = {};
  for (let i in state.roomsList) {
    if(state.roomsList[i].key == state.u_key){
      roomTmp = state.roomsList[i]
    }
  }
  return {
    room: roomTmp,
    u_key: state.u_key
  }
}
class RoomDetails extends Component {
  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <ScrollView style = {styles.container}>
        <Header/>
        <ImageSlider pictures = {this.props.room.pictures}/>
        <InformationRoom room_props = {this.props.room} u_key = {this.props.u_key}/>
        <WriteCommentary u_key = {this.props.u_key}/>
        <CommentaryList/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    price:{
      color: 'red'
    }
})

export default connect(mapStateToProps)(RoomDetails);
