/**
 * This is Home screnn of the application
 * Create order and view orders are main navigation of the Home screen
 */
import {React, useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, ScrollView } from 'react-native';
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
    <ScrollView>
      <Text> -- Logged User -- </Text>

      <Text>User ID - {userToken.userID}</Text>
      <Text>User Name - {userToken.userName}</Text>

      <Button title="Logout" onPress={handleLogout}/>

      <Background>
        <View>
          <Text /><Text /><Text /><Text />
          <Logo />
          <Text /><Text /><Text /><Text /><Text /><Text /><Text /><Text /><Text /><Text /><Text /><Text />
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
      </Background>
    </ScrollView>
  )

}
