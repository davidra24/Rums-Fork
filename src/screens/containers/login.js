import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import GoogleLogin from '../../../utils/googleLogin.js';
import firebase from 'react-native-firebase'
import { GoogleSignin } from 'react-native-google-signin';
import {AsyncStorage} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class Login extends Component {
  static navigationOptions = {
    header: null
  }
  render(){
    singInGoogle = async () => {
      try {
        await GoogleSignin.configure();
        const data = await GoogleSignin.signIn();
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
        try {
          await AsyncStorage.setItem('userId', firebaseUserCredential.user.uid);
        } catch (error) {
          console.warn('Error Guardando');
        }
        } catch (e) {
        console.error(e);
      }
      const resetAction = StackActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: 'Home'}) ]
      });
      this.props.navigation.dispatch(resetAction);
    }
    return(
      <View style = {styles.container}>
        <Image
          style = {styles.logo}
          source = {require('../../../assets/logo.png')}
        />
        <Text style = {styles.text}>Ingresa/Registrate con:</Text>
        <View style = {styles.loginSpace}>
          <TouchableOpacity
          style = {styles.button}
          onPress = {singInGoogle}>
            <Image
              style = {styles.buttonImageGoogle}
              source={require('../../../assets/icon-google.png')}
            />
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button}>
            <Image
              style = {styles.buttonImageFacebook}
              source={require('../../../assets/icon-facebook.png')}
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#F63E02',
      alignItems: 'center',

    },
    logo:{
      width: "55%",
      resizeMode: 'contain',
      marginTop: 100
    },
    text:{
      margin: 25,
      color: 'white',
      fontSize: 14,
    },
    loginSpace:{
      height: 105,
      width: 200,
    },
    button:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 3,
      borderWidth: 0.5,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 1,
      marginTop: 10
    },
    buttonImageGoogle:{
      height: 40,
      width: 40,
      marginLeft: 25,
      marginRight: 27
    },
    buttonImageFacebook:{
      height: 40,
      width: 40,
      marginLeft: 25,
      marginRight: 20
    },
})

export default Login;
