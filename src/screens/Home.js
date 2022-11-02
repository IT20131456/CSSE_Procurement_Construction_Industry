/**
 * This is Home screnn of the application
 * Create order and view orders are main navigation of the Home screen
 */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, ScrollView } from 'react-native';
import Background from '../components/auth/Background';
import Logo from '../components/auth/Logo';

export default function Home({ navigation }) {

  const Navigation = useNavigation();

  const onPressLearnMore = () => {

  }
  return (
    <ScrollView>
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
