import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../../assets/images/SkylineContractors_Logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
    marginBottom: 8,
  },
})