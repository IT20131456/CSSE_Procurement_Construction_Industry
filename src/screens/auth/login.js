import {React, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import Background from '../../components/auth/Background';
import Logo from '../../components/auth/Logo';
import TextInput from '../../components/auth/TextInput';
import SubmitButton from '../../components/auth/SubmitButton';


import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Login() {

    const Navigation = useNavigation();

    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onLoginPressed = () => {
        // const emailError = emailValidator(email.value)
        // const passwordError = passwordValidator(password.value)
        
        // if (emailError || passwordError) {
        //   setEmail({ ...email, error: emailError })
        //   setPassword({ ...password, error: passwordError })
        //   return
        // }
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'Dashboard' }],
        // })
        
        const data = {
          userID: email.value,
          nicNo: password.value
        }

        //console.log(data);
        
        // fetch('http://192.168.56.1:5000/user/login', {
        //   method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     userID: email.value,
        //     nicNo: password.value
        //   })
        // }).then((res)=>{
        //   alert(res);
        // }).catch((error)=>{
        //   alert(error);
        // });

        axios.post('http://192.168.56.1:5000/user/login', data)
        .then(function (response) {
          if(response.data.success){
            alert("Login Success");
            setTimeout(()=>{
              Navigation.navigate('Home');
            }, 2000)
            
          }
        })
        .catch(function (error) {
          alert("Login Fail");
        });

        
      }

  return (
    <Background>
        <Logo />
        <Text style={styles.header}>Welcome Back</Text>

        <TextInput
        
        label="User ID"
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
        label="NIC No"
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
