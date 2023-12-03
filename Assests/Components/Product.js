import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ProductScrollMenu = () => {
  const products = [
    { id: '1', name: 'Fashion', image: require('../Images/product1.png') },
    { id: '2', name: 'Electronics', image: require('../Images/product2.jpg') },
    { id: '3', name: 'Appliances', image: require('../Images/product34.jpg') },
    { id: '4', name: 'Reapair', image: require('../Images/product34.jpg') },
    { id: '5', name: 'Home', image: require('../Images/product5.jpg') },
    { id: '6', name: 'Gromming', image: require('../Images/product6.jpg') },
    { id: '7', name: 'Home', image: require('../Images/product7.png') },
    { id: '8', name: 'Travel', image: require('../Images/product8.jpg') },
    { id: '9', name: 'Repair', image: require('../Images/product5.jpg') },
    { id: '10', name: 'Vegetables', image: require('../Images/product10.jpg') },
    { id: '11', name: 'Grocery', image: require('../Images/product11.jpg') },
    { id: '12', name: 'Self jobs', image: require('../Images/product12.jpg') },
    { id: '13', name: 'Vehical care', image: require('../Images/product13.jpg') },
    { id: '14', name: 'Food', image: require('../Images/product14.jpg') },
    { id: '15', name: 'Repair', image: require('../Images/product15.jpg') },
    // Add more products as needed
  ];

  return (
    <View style={{height: 140, marginTop:10}}>

    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    marginRight: 55,
    marginLeft: 55,
    height: 10
  },
  productContainer: {
    marginRight: 60,
    height: 10
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProductScrollMenu;
