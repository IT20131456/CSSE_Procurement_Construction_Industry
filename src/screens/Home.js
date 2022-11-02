import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function Home() {

    const onPressLearnMore = () => {

    }
  return (
    <View>
        <Text></Text>
        <Text>Hello Home!</Text>
        <Text></Text>
        <Button
            onPress={onPressLearnMore}
            title="Order Now"
            color="#f08e25"
            accessibilityLabel="Learn more about this purple button"
        />
        <Text></Text>
        <Button
            onPress={onPressLearnMore}
            title="View Order"
            color="#f08e25"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
    
  )
}
