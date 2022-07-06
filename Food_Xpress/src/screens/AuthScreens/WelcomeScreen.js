import { View, Text, StyleSheet, Dimensions, TextInput, Animated, Image } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { COLORS, SIZES } from '../../global/Styles'
import { Icon } from "@rneui/themed";
import Header from '../../components/Header'
import Swiper from 'react-native-swiper';
import { images } from '../../../constants';
import FormButton from '../../global/FormButton';
import { SignInContext } from '../../Contexts/AuthContext';
import auth from '@react-native-firebase/auth';


export default function WelcomeScreen({ navigation }) {

    const { dispatchSignedIn } = useContext(SignInContext)

    // Query the firebase
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                // dispatch user to the local storage (reducer)
                dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: "signed-in" } })
            }
            else{
                // the user has signed out or didn't sign in to firebase
                dispatchSignedIn({ type: 'UPDATE_SIGN_IN', payload: { userToken: null } })     
            }
        })

    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 23, color: COLORS.button, fontWeight: "bold" }}>
                    DISCOVER RESTURANTS
                </Text>
                <Text style={{ fontSize: 23, color: COLORS.button, fontWeight: "bold" }}>
                    IN YOUR AREA
                </Text>
            </View>

            <View style={{ flex: 4, justifyContent: 'center', marginTop: -50 }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image source={images.Welcome1} style={{ height: '100%', width: '100%' }} />
                    </View>

                    <View style={styles.slide2}>
                        <Image source={images.Welcome2} style={{ height: '100%', width: '100%' }} />
                    </View>

                    <View style={styles.slide3}>
                        <Image source={images.Welcome3} style={{ height: '100%', width: '100%' }} />
                    </View>

                    <View style={styles.slide3}>
                        <Image source={images.Shawama1} style={{ height: '100%', width: '100%' }} />
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4, marginBottom: SIZES.base, marginVertical: SIZES.padding, marginTop: 100 }}>

                {/* Button */}
                <View style={{ marginHorizontal: SIZES.base, marginVertical: SIZES.padding, marginTop: -20 }}>
                    <FormButton labelText='SIGN IN' handleOnPress={() => navigation.navigate('SigninScreen')} />
                </View>
                <View style={{ marginHorizontal: SIZES.base, marginVertical: 10 }}>
                    <FormButton labelText='CREATE AN ACCOUNT' isPrimary={false}
                        handleOnPress={() => navigation.navigate('SignUpScreen')}
                    />
                </View>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    }
})