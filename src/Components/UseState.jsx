import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [name, setName] = useState("Sumit"); 
    const updateName = () => {
        setName('Sumit Shah')
    }

  return (
    <View>
      <Text style= {{fontSize:30}}>UseState</Text>
      <Text style= {{fontSize:30}}>Name : {name}</Text>
      {/* <Button title='Press' onPress={() =>setName("Sumit Shah")}/> */}
      <Button title='Press' onPress={updateName}/>
    </View>
  )
}

export default UseState