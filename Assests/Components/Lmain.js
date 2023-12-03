import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Lmain() {
  return (
    <View>
      <View  style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Text style={{ fontSize: 65 }}>
          <Text style={{ color: 'black' }}>WE ARE </Text>
          <Text style={{ color: 'red' }}>Everywhere!</Text>
        </Text>
        <Text style={{fontSize: 25}}>Any place in India you can get services from Trust service providers!</Text>
      </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
                <Image source={require('../Images/apple.png')} style={{ height:70,width:240, borderRadius: 10}}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../Images/playstore.png')} style={{ height:107,width:240, marginRight: 10, marginLeft: 150}}/>
            </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
            <Text style={{fontSize: 18, fontWeight: 'bold',}}>*To list your business, bid services and booking services, please use our Android version 🙂 iOS and website version will be updated very soon! </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={{ fontSize: 50, fontWeight: '600' }}>
          <Text style={{ color: 'black' }}>WE ARE NOW </Text>
          <Text style={{ color: 'red' }}>PROUDLY </Text>
          <Text style={{ color: 'black' }}>PART OF </Text>
        </Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part1.png')} style={{height: 220, width: 220, marginRight: 15}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part2.webp')} style={{height: 100, width: 250  }}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part3.png')} style={{height: 220, width: 220 }}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part4.png')} style={{height: 170, width: 180 }}/>
            </TouchableOpacity>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part5.png')} style={{height: 60, width: 300, marginRight: 15}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part6.png')} style={{height: 150, width: 220, marginRight: 15}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 25}}>
                <Image source={require('../Images/part7.png')} style={{height: 150, width: 150, marginRight: 15}}/>
            </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={{ fontSize: 50, fontWeight: '600' }}>
          <Text style={{ color: 'black' }}>SIGNUP FOR </Text>
          <Text style={{ color: 'red' }}>UPDATES!</Text>
        </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold',}}>We are growing across India and we would be happy to have you in our growing community!</Text>
        </View>

        <View style={{marginTop: 20,marginLeft: 150,height: 48, borderColor: 'yellow', backgroundColor: 'white', borderWidth: 3, borderRadius: 5, width: 1200, color: 'grey',}}>
        <TextInput placeholder='YOUR EMAIL' style={{marginTop: 14, marginLeft: 8}}/>
        </View>

        <View style={{marginTop: 10,marginLeft: 150}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>We know that you hate spams, so do we!</Text>
        </View>

        <View>
        <TouchableOpacity style={styles.loginb}>
        <Text style={{color: 'white', fontSize:18, fontWeight: 'bold'}}> Notify me! </Text>
        </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={{ fontSize: 50, fontWeight: '600' }}>
          <Text style={{ color: 'black' }}>FOLLOW US </Text>
          <Text style={{ color: 'red' }}>ON!</Text>
        </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, display: 'flex', flexDirection: 'row'}}>
            <Entypo name="facebook" size={55} color="blue" style={{marginRight: 15}}/>
            <Entypo name="instagram-with-circle" size={55} color="red" style={{marginRight: 15}}/>
            <Entypo name="youtube" size={55} color="red" style={{marginRight: 15}}/>
            <FontAwesome name="twitter-square" size={55} color="blue" style={{marginRight: 15}}/>
            <AntDesign name="linkedin-square" size={55} color="blue" /> 
        </View>

        <View style={{marginTop: 40,flexDirection: 'row-reverse', marginRight: 90, marginBottom: 60}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>Let's make a Trusted service network, together!</Text>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
    loginb: {
        backgroundColor: 'red',
        height: 50,
        width: 150,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 150,
      },
})
