import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/splash/Splash';
import LoginScreen from '../screens/auth/Login';
import ViewOrders from '../screens/order/ViewOrders';
import {NewOrder} from '../screens/order/NewOrder';
import ViewOrderDetails from '../screens/order/ViewOrderDetails';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen  name="NewOrder" component={NewOrder} />
        <Stack.Screen  name="ViewOrders" component={ViewOrders} />
        <Stack.Screen  name="ViewOrderDetails" component={ViewOrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
