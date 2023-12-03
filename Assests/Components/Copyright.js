import { View, Text } from 'react-native'
import React from 'react'

export default function Copyright() {
  return (
    <View style={{backgroundColor: 'black', width: '100%', height: 40, marginTop: 0.2}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:7}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '300',}}>Copyright © 2023 CloudAI PVT.LTD.</Text>
        </View>
    </View>
  )
}