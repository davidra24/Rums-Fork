import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

function Header(props) {
  return(
    <View>
      <SafeAreaView  style = {styles.container}>
        <View  style = {styles.left}>
          <Image
            source = {require('../../../assets/logo.png')}
            style = {styles.logo}
          />
        </View>
        <View  style = {styles.right}>
          <TouchableOpacity style = {styles.hintContainer}>
            <Image
              style = {styles.hint}
              source = {require('../../../assets/hint.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    backgroundColor: '#F63E02',
    height: 50,
    marginBottom: 10
  },
  left:{
    flex: 1,
    paddingTop: 5
  },
  logo : {
    width: 80,
    height: 30,
    marginLeft: 10,
    marginTop: 5,
    resizeMode: 'stretch'
  },
  right:{
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 5
  },
  hintContainer:{
    alignSelf: 'auto',
    paddingTop: 3,
    paddingRight: 10
  },
  hint:{
    height: 30,
    width: 30
  }
})

export default Header;
