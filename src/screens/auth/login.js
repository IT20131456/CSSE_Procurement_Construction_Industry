import {React, useState} from 'react';
import Background from '../../components/auth/Background';
import Logo from '../../components/auth/Logo';
import TextInput from '../../components/auth/TextInput';
import SubmitButton from '../../components/auth/SubmitButton';


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function login() {

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      }

  return (
    <Background>
        <Logo />
        <Text style={styles.header}>Welcome Back</Text>

        <TextInput
        
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

    <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

    <SubmitButton mode="contained" color="#f08e25" onPress={onLoginPressed}>
        Login
      </SubmitButton>

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </Background>

    
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 21,
        //color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
      },
      row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      link: {
        fontWeight: 'bold',
        //color: theme.colors.primary,
      },
})
