import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Commentary(props){
  return(
    <View style = {styles.container}>
      <Text style = {styles.commentary}>
        {props.commentary}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  commentary:{
    margin: 10,
    color: '#0A435F',
    fontSize: 15
  }
})

export default Commentary;
