import { View, Text, StyleSheet, Dimensions, TextInput, Animated, Alert } from 'react-native'
import React from 'react'
import { COLORS } from '../../global/Styles'
import { Icon } from "@rneui/themed";
import Header from '../../components/Header'
import FormInput from '../../global/Forminput'
import { SIZES } from '../../global/Styles'
import { useState, useRef, useContext } from 'react'
import FormButton from '../../global/FormButton';
import { SocialIcon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { SignInContext } from '../../Contexts/AuthContext';



export default function SigninScreen({ navigation }) {
  const {dispatchSignedIn} = useContext(SignInContext)
  async function Signin(data) {
    try {
      const { password, email } = data
      const user = await auth().signInWithEmailAndPassword(email, password)
      if (user) {
        dispatchSignedIn({type: 'UPDATE_SIGN_IN', payload: {userToken: "signed-in"}})
      }
    } catch (error) {
      Alert.alert(
        error.name,
        error.message
      )
    }
  }

  const [textinput2focused, setTextinput2focused] = useState(false)
  const textInput1 = useRef(1)
  const textInput2 = useRef(2)


  return (

    <View style={styles.container}>


      <Header tittle="My Account" name='arrow-back' navigation={navigation} />


      {/* Formik: to capture the user details */}
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          Signin(values)
        }}
      >

        {
          (props) =>
            <View>
              <View style={{ marginHorizontal: SIZES.base, marginVertical: SIZES.padding }}>
                <View>
                  <Text style={{ fontSize: 30, color: COLORS.button }}>Sign-in</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text style={styles.text1}>Please enter your email and password </Text>
                  <Text style={styles.text1}>registered with your account </Text>

                </View>



                {/* Email */}
                <View>
                  <FormInput placeholderText='Email'
                    onChangeText={props.handleChange('email')}
                    valuen={props.values.email}
                  />
                </View>

                {/* Password */}
                <View style={styles.password}>
                  <Animatable.View animation={textinput2focused ? "" : "fadeInLeft"} duration={400}>
                    <Icon
                      name="lock"
                      iconStyle={{ color: COLORS.grey3 }}
                      type='material'
                    />

                  </Animatable.View>

                  <TextInput placeholder='Password' style={styles.input} ref={textInput2}
                    onFocus={() => {
                      setTextinput2focused(false)
                    }}
                    onBlur={() => {
                      setTextinput2focused(true)
                    }}
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                  />

                  <Animatable.View animation={textinput2focused ? "" : "fadeInLeft"} duration={400}>
                    <Icon
                      name="visibility-off"
                      iconStyle={{ color: COLORS.grey3 }}
                      type='material'
                    />

                  </Animatable.View>
                </View>
              </View>

              <View style={{ marginHorizontal: SIZES.base, marginVertical: SIZES.padding }}>
                <FormButton labelText='SIGN IN'
                  handleOnPress={props.handleSubmit} />
              </View>
            </View>
        }
      </Formik>




      {/* Forgot password */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>Forgot password?</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>OR</Text>
      </View>

      {/* Social Icon */}
      <View style={{ marginHorizontal: SIZES.base, alignItems: 'center' }}>
        <SocialIcon
          title='Sign in with Facebook'
          button
          type='facebook'
          style={styles.SocialIcon}
          onPress={() => { }}
        />
      </View>


      <View style={{ marginHorizontal: SIZES.base, alignItems: 'center' }}>
        <SocialIcon
          title='Sign in with Google'
          button
          type='google'
          style={styles.SocialIcon}
          onPress={() => { }}
        />
      </View>


      <View style={{ marginHorizontal: SIZES.base, marginVertical: SIZES.base, alignItems: 'flex-start' }}>
        <Text style={{ ...styles.text1, }}>New on FoodXpress?</Text>
      </View>

      <View style={{ marginHorizontal: SIZES.base, marginVertical: SIZES.padding, alignItems: 'flex-end' }}>
        <FormButton labelText='Create an account' isPrimary={false} style={{ paddingHorizontal: 10 }}
        handleOnPress={()=>navigation.navigate('SignUpScreen')} />
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    fontSize: 16,
    color: COLORS.grey3
  },
  password: {
    padding: 10,
    borderColor: COLORS.button,
    borderWidth: 1,
    width: '100%',
    borderRadius: 11,
    marginTop: 10,
    color: COLORS.black,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  input: {
    height: 40,
    alignItems: 'center',
    fontSize: 18,
    top: -4,
    width: '80%'
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
    width: '100%'
  }


})