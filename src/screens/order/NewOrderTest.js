import React from 'react'
import { Button, View } from 'react-native'

export default function NewOrderTest({navigation}) {

    const onOrderPressed = () => {
        navigation.navigate('Home');
    }

  return (
    <View>
        <Button title='Add Order' testID='addOrderButton' mode="contained" onPress={onOrderPressed}></Button>
    </View>
  )
}
