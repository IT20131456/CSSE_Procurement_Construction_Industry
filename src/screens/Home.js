/**
 * This is Home screnn of the application
 * Create order and view orders are main navigation of the Home screen
 */
import {React, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/auth/Background';
import Logo from '../components/auth/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

  const Navigation = useNavigation();

  const [userToken, setUserToken] = useState([]);
  const [user_id, setUser_id] = useState("");
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    handleLoggedUser();
  }, [])

  // Get logged user details -> loggedUserData: { 'user_id': '', 'userID': '', userName: '' }
  const handleLoggedUser = async () => {

    // Get user data from AsyncStorage
    const userData = await AsyncStorage.getItem('loggedUserData');  

    // Pass userData JSON object to array
    const userDataArray = JSON.parse(userData);

    setUserToken(userDataArray);
    setUser_id(userDataArray.user_id);
    setUserID(userDataArray.userID);
    setUserName(userDataArray.userName);
  }

  const handleLogout = () => {
    AsyncStorage.removeItem('AccessToken'); 
    alert("User Logout")
    setTimeout(()=>{
      navigation.navigate("Login");
    }, 2000)
  }

  
  const onPressLearnMore = () => {

  }

  return (
    <ScrollView style={styles.homeBackgroud}>

      <View style={styles.titleBackgroud}>
        <Text style={styles.userNameTitleHello}>Hello {userToken.userName}</Text>
          
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text />
        <Logo />
      </View>

      <View style={styles.homeButtonBackgroud}>

      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: '#f08e25', fontWeight: 'bold' }}>Welcome Back</Text>
      </View>

      <Text /><Text /><Text /><Text /><Text /><Text /><Text />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.mainButton} onPress={() =>
                Navigation.navigate('NewOrder')
              }>
            <Text style={styles.mainBtnTitle}>New Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainButton} onPress={() =>
              Navigation.navigate('ViewOrders')
            }>
            <Text style={styles.mainBtnTitle}>View Order</Text>
        </TouchableOpacity>

      </View>

      {/* <Text> -- Logged User -- </Text>

      <Text>User ID - {userToken.userID}</Text>
      <Text>User Name - {userToken.userName}</Text>

      <Button title="Logout" onPress={handleLogout}/> */}

      

      {/* <Background>
        <View>
          <Text /><Text /><Text /><Text />
          <Logo />

          <Button
            onPress={() =>
              Navigation.navigate('NewOrder')
            }
            title="New Order"
            color="#f08e25"
            accessibilityLabel="Learn more about this purple button"
          />
          <Text></Text>
          <Button
            onPress={() =>
              Navigation.navigate('ViewOrders')
            }
            title="View Order"
            color="#f08e25"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </Background> */}
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  homeBackgroud: {
    backgroundColor: '#ffffff',
  },
  titleBackgroud: {
    backgroundColor: '#f08e25',
    padding: 10,
  },
  userNameTitleHello: {
    color: '#ffffff',
    fontSize: 20,
  },
  mainButton: {
    width: '80%',
    backgroundColor: '#f08e25',
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  mainBtnTitle: {
    color: '#ffffff',
    fontSize: 25,
  },
})
