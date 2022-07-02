import React from 'react';
import 'react-native-gesture-handler';
import {
 
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AuthStack from './src/navigation/AuthStack';
import RootNavigator from './src/navigation/RootNavigator';





export default function App(){
  return(
   
    <View style = {styles.container}>
    <StatusBar barStyle= "light-content" backgroundColor={'#ff8c52'}/>
    
     <RootNavigator/>
    
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})


