import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Separator(props){
  return(
    <View style = {[
    	styles.separator,
    	{
    		borderTopColor: "#eaeaea" || props.color
    	}
    ]}>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
})
export default Separator
