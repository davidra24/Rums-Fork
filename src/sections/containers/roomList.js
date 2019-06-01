import React, { Component } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Empty from '../components/empty.js'
import Separator from '../components/separator.js'
import Room from '../components/room.js'
import Api from '../../../utils/api.js'
import firebase from 'react-native-firebase'
import {connect} from 'react-redux'
var myFlatList = '';
function mapStateToProps(state){
  return {
    roomsList: state.roomsList
  }
}

class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      roomsList: []
    }
  }
  filterSearch(text){
    var newData = this.props.roomsList.filter(function(item){
      const itemData = item.price.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    })
    myFlatList.props.data = {newData};
    console.log(myFlatList.props.data);
    /*this.setState({
      roomsList: newData
    });*/
  }
  async componentDidMount(){
    this.setState({
      roomsList: this.props.roomsList
    });
  }
  renderEmpty = () => <Empty text = "Esta lista se encuentra vacia"/>
  itemSeparator = () => <Separator color = 'black'/>
  renderItem = ({item}) => {return(<Room {...item} u_key = {item.key} navigation = {this.props.navigation}/>)}
    render (){
      return (
        <View>
          <FlatList
            ref = {list => {myFlatList = list}}
            style = {styles.list}
            ListEmptyComponent = {this.renderEmpty}
            ItemSeparatorComponent = {this.itemSeparator}
            data = {this.props.roomsList}
            renderItem = {this.renderItem}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  containerSearchBar:{
    flex: 1,
  },
  textInputStyle:{
    height: 40,
    marginBottom: 5,
    marginHorizontal: 5
  },
  list:{
    margin: 5
  }
})


export default connect (mapStateToProps)(RoomList);
/*<View style = {styles.containerSearchBar}>
  <TextInput
  style = {styles.textInputStyle}
  placeholder = "Busca por precio"
  underlineColorAndroid = '#F63E02'
  onChangeText = {(text) => this.filterSearch(text)}
  />
</View>*/
