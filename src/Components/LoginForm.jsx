import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Login</Text>
      <TextInput 
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor= "#999"
      />
      <TextInput 
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginForm