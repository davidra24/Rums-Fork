import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Empty from '../components/empty.js'
import Separator from '../components/separator.js'
import Commentary from '../components/commentary.js'
import firebase from 'react-native-firebase';
import {connect} from 'react-redux'

function mapStateToProps(state){
  var roomTmp = {};
  for (let i in state.roomsList) {
    if(state.roomsList[i].key == state.u_key){
      roomTmp = state.roomsList[i]
    }
  }
  var commentsArray = [];
  for (let i in roomTmp.comments) {
    commentsArray.push({commentary: roomTmp.comments[i]});
  }
  return {
    comments: commentsArray,
    u_key: state.u_key
  }
}

class CommentaryList extends Component {
  state = { commentaryList: [] };

  renderEmpty = () => <Empty text = "Aún no hay comentarios"/>
  itemSeparator = () => <Separator color = '#F63E02'/>
  renderItem = ({item}) => {return(<Commentary {...item}/>)}

  render(){
    return(
      <FlatList
        style = {styles.list}
        ListEmptyComponent = {this.renderEmpty}
        ItemSeparatorComponent = {this.itemSeparator}
        data = {this.props.comments}
        renderItem = {this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
    list:{
      margin: 10
    }
})


export default connect(mapStateToProps) (CommentaryList);
