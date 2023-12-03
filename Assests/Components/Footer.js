import { View, Text, Image, StyleSheet, style } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Footer() {
  return (
    <View style={{backgroundColor: 'black', width: '100%', height: 310, display: 'flex', flexDirection: 'row'}}>

      <View style={styles.part1}>
        <TouchableOpacity >
          <Image source={require('../Images/logo.png')} style={{height: 60, width: 60,marginLeft: 160, marginBottom: 10}}/>
        </TouchableOpacity>
        
          <Text style={{ color: 'white' ,textAlign: 'center',justifyContent: 'center', fontWeight: 'bold', marginLeft: 17, marginBottom: 4}}>Commisson FREE app for more than</Text>
          <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold',marginLeft: 15 }}>400 businesses.Start your own</Text>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold',justifyContent: 'center', marginLeft: 16}}>delivery business in 10 minutes!</Text>
      
      </View>
        
      <View style={styles.part2}>
      <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 20 }}>
          <Text style={{ color: '#00bfff' }}>Contact Us</Text>
        </Text>

        <Text style={{marginBottom: 15}}>
          <Entypo name="location-pin" size={24} color="#00bfff" />
          <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4}}>Cowrks,Eco world,Bellandur, Bangalore </Text>
          <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 27,}}>(India)</Text>
        </Text>

        <Text style={{marginBottom: 15}}>
          <Entypo name="location-pin" size={24} color="#00bfff" />
          <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4}}>WeWork Frankfurt am Main, DE 60313 </Text>
          <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 27, }}>Frankfurt am Main (Germany)</Text>
        </Text>

        <Text>
          <FontAwesome5 name="mail-bulk" size={24} color="#00bfff" />
          <Text style={{color: 'white', fontSize: '16', fontWeight: '600', marginLeft: 4}}>trustapp@cloudai.in</Text>
        </Text>
      </View>


      <View style={styles.part2}>
      <Text style={{ fontSize: 25, fontWeight: '600', marginBottom: 20 }}>
          <Text style={{ color: '#00bfff' }}>Quick Links</Text>
        </Text>

        <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4, marginBottom: 15}}>Privacy</Text>
        <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4, marginBottom: 15}}>Terms & Condition</Text>
        <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4, marginBottom: 15}}>Legal & Compliance</Text>
        <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4, marginBottom: 15}}>GST :  29AAICC0770A177</Text>
        <Text style={{color: 'white', fontSize: '16', fontWeight: '600',marginLeft: 4, marginBottom: 15}}>CloudAI Pvt Ltd</Text>
      </View>

      <View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={{ fontSize: 45, fontWeight: '600' }}>
          <Text style={{ color: '#c21807' }}>FOLLOW US </Text>
        </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, display: 'flex', flexDirection: 'row'}}>
            <Entypo name="facebook" size={35} color="white" style={{marginRight: 15}}/>
            <Entypo name="instagram-with-circle" size={35} color="white" style={{marginRight: 15}}/>
            <FontAwesome name="twitter-square" size={35} color="white" style={{marginRight: 15}}/>
            <AntDesign name="linkedin-square" size={35} color="white" /> 
        </View>
      </View>

      
            
    </View>
  )
}

const styles = StyleSheet.create({
  part1 : {
    marginTop: 70,
    width: 350,
    height: 40,
    display: 'flex',
    flexDirection: 'column'
  },
  part2 : {
    marginTop: 50,
    width: 300,
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 80
  }
})