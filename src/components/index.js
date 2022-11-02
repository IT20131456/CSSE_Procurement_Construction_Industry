import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login';
import SplashScreen from '../screens/splash/Splash';
import HomeScreen from '../screens/Home';
import { NewOrder } from '../screens/order/NewOrder';
import Navigation from '../navigations/Navigation';

const Stack = createNativeStackNavigator();

export default function index() {
  return (

    <Navigation />
    
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Splash' >
    //     <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
    //     <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
    //     <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    //     <Stack.Screen name="New Purchase Order" component={NewOrder} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}
