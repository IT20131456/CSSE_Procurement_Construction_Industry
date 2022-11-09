/**
 * This compoenets used to dipaly small loading page
 */
import {useNavigation} from '@react-navigation/native';
import {React, useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        handleUserToken();
        setIsGo(false);
      }, 3000);
    }
  }, []);

  const handleUserToken = async () => {
    const userToken = await AsyncStorage.getItem('AccessToken');

    if(!userToken){
      Navigation.replace('Login');
    }else{
      Navigation.replace('Home');
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/SkylineContractors_Logo.png')}
        style={{width: 200, height: 150}}
      />
    </View>
  );
}
