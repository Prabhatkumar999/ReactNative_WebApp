import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Assests/Components/Header';
import Product from './Assests/Components/Product';
import BannerSlider from './Assests/Components/Banner';
import Main from './Assests/Components/Main';
import Lmain from './Assests/Components/Lmain';
import Footer from './Assests/Components/Footer';
import Copyright from './Assests/Components/Copyright';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Product/>
      <BannerSlider/>
      <Main/>
      <Lmain/>
      <Footer/>
      <Copyright/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
