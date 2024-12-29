import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [userName, setUserName] = useState('')

  return (
    <View>
      <Text style={{fontSize:30}}>InputText</Text>
      <Text style={{fontSize:30}}>Username : {userName}</Text>
      <TextInput style = {{fontSize:20, borderWidth:2, borderColor: "black", margin:10}} value={userName} placeholder='Enter Your Username' onChangeText={(value) => setUserName(value)} />
        <Button title='Clear' onPress={() => setUserName('')}/>
    </View>
  )
}

export default InputText