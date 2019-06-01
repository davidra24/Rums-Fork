import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

function Loading(props) {
  return(
    <View style = {styles.container}>
      <Image
        source = {require('../../../assets/logo.png')}
        style = {styles.logo}
      />
      <ActivityIndicator
        size="large"
        color= 'white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F63E02',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 40
  }
})

export default Loading;
