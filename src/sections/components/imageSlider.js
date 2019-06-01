import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import ImageCarousel from 'react-native-image-slider';

function ImageSlider(props){
  const pictureList = [];
  for (let i in props.pictures) {
    pictureList.push(props.pictures[i]);
  }
  return(
    <View>
      <SafeAreaView style = {styles.image_container}>
        <ImageCarousel
          autoPlayWithInterval={3000}
          images= {
            pictureList
          }
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  image_container:{
    height: 180,
    margin: 5
  }
})

export default ImageSlider;
