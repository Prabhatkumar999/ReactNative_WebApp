import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

export default function Header() {
  return (
    <View style={styles.main}>

      <TouchableOpacity style={styles.logo}>
      <Image source={require('../Images/logo.png')} style={{ height:30,width:30, marginRight: 10, marginLeft: 150}}/>
      <Text style={{fontSize:17, textAlign:'center', fontWeight:'bold', color: 'white'}}>TrustAPP</Text>
      </TouchableOpacity>

      <View style={styles.search}>
      <FontAwesome name="search" size={20} color="grey" style={{ marginLeft: 550 }} />
        <TextInput style={{marginTop:-18}}  placeholder='Search for more then 400 services'/>
      </View>

        <TouchableOpacity style={styles.loginb}>
        <Text style={{color: 'blue', fontSize:18,}}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity >
            <Text style={{fontSize: 16, textAlign:'center',fontWeight: '500', color: 'white', marginLeft: 20}}>Add Business</Text>
        </TouchableOpacity>

        <TouchableOpacity >
            <Text style={{fontSize: 16, textAlign:'center',fontWeight: '500', color: 'white', marginLeft: 20}}>More</Text>
        </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({
    main: {
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        
    },
    logo:{
       justifyContent: 'center',
       alignItems: 'center',
       display: 'flex',
       flexDirection: 'row'
    },
    search: {
        height: 35,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 20,
        padding: 5,
        borderRadius: 10,
        width: 600,
        marginLeft: 150,
        color: 'grey'
    },
    loginb: {
        backgroundColor: 'white',
        height: 33,
        width: 100,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 130,
      },
})