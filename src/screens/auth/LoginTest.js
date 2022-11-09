import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Text,
    View,
    Button
  } from 'react-native';



export default function LoginTest({navigation}) {

    const onLoginPressed = () => {
        navigation.navigate('Home');
    }

    const onSignUpPressed = () => {
        navigation.navigate('Register');
    }
    
  return (
    <View>
        <Button title="Submit" mode="contained" onPress={onLoginPressed} testID="loginButton" />
        <Button title="SignUp" mode="contained" onPress={onSignUpPressed} testID="registerButton" />
    </View>
  )
}
