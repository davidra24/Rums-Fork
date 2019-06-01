import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  BackHandler
} from 'react-native';

import Header from '../../sections/components/header.js'
import RoomList from '../../sections/containers/roomList.js'
import { StackActions, NavigationActions } from 'react-navigation';

type Props = {};
class Home extends Component {

  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <ScrollView>
        <Header/>
        <RoomList navigation = {this.props.navigation}/>
      </ScrollView>
    );
  }
}

export default Home;
