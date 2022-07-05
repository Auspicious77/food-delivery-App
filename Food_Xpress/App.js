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
import { SignInContextProvider } from './src/Contexts/AuthContext';






export default function App(){
  return(
   <SignInContextProvider>
    <View style = {styles.container}>
    <StatusBar barStyle= "light-content" backgroundColor={'#ff8c52'}/>   
     <RootNavigator/>
    </View>
    </SignInContextProvider> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})


