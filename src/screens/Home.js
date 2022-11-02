import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function Home({navigation}) {

  const Navigation = useNavigation();

    const onPressLearnMore = () => {

    }
  return (
    <View>
        <Text></Text>
        <Text>Hello Home!</Text>
        <Text></Text>
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
    
  )
}
