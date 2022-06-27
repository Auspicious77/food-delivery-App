import React from 'react';
import {
 
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from './src/global/Styles'
import Header from './src/components/Header';
import SigninScreen from './src/screens/AuthScreens/SigninScreen';




export default function App(){
  return(
    <View style = {styles.container}>
    <StatusBar barStyle= "light-content" backgroundColor={'#ff8c52'}/>
     <SigninScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})


