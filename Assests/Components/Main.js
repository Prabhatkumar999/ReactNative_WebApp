import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Main() {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>

    <View style={styles.container1}>
        <Text style={{fontSize: 38, color: 'white', marginLeft: 10, marginRight: 6}}>Earn cash rewards everyday in app.</Text>
        <Text style={{fontSize: 22, color: 'black', marginLeft: 10, marginRight: 6}}>At bottom section of Home page of Trust app, click 🚀 button, then in next page click "Hot Offers" to view latest offer of our app. Follow this Video for steps.</Text>
        <Text style={{fontSize: 38, color: 'white', marginLeft: 10, marginRight: 6}}>Get more customers for your business.</Text>
        <Text style={{fontSize: 22, color: 'black', marginLeft: 10, marginRight: 6}}>Create a service provider profile in app to get direct orders from your customers. Follow this Video for steps.</Text>
    </View>
<View>
    <View style={styles.mcontainer}>
        <Text style={{fontSize: 38, color: 'white', marginLeft: 10, marginRight: 6, fontWeight: '700'}}>ONE APP FOR ALL BUSINESS</Text>
    </View>
</View>
    <View style={styles.container2}>
        <Text style={{fontSize: 38, color: 'white', marginLeft: 10, marginRight: 6}}>Hire, search local job, Buy and Sell in local</Text>
        <Text style={{fontSize: 22, color: 'black', marginLeft: 10, marginRight: 6}}>Every Broadcast is FREE !! Post your Buy and Sell of old goods. Hire Staffs for your shop. Search local jobs. Log into app then use Tools - *Broadcast*.</Text>
        <Text style={{fontSize: 38, color: 'white', marginLeft: 10, marginRight: 6}}>Broadcast any AD at FREE cost</Text>
        <Text style={{fontSize: 22, color: 'black', marginLeft: 10, marginRight: 6}}>Advertise your events,sales or anything at ZERO cost. For Steps view this Video.</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'blue',
        width: '31.5%',
        borderRadius: 2,
        marginLeft: 10,
        marginTop: 14,
        height: 650
    },
    container2: {
        backgroundColor: 'blue',
        width: '31%',
        borderRadius: 2,
        marginTop: 14,
        height: 650
    },
    mcontainer: {
        backgroundColor: 'blue',
        marginTop: 10,
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10
    }
})