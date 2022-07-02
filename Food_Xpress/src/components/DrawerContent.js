import React, { useState, useContext, useEffect } from 'react'
import { COLORS } from '../global/Styles';

import {
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch,
    StyleSheet
} from 'react-native'

import {
    DrawerContentScrollView, DrawerItemList, DrawerItem
} from '@react-navigation/drawer'


import { Avatar, Button, Icon } from "@rneui/themed";
import { images } from '../../constants';


export default function DrawerContent(props) {
    return (
        <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View>
                <Avatar
                    rounded
                    avatarStyle={styles.Avatar}
                    source={images.Shawama}
                />
            </View>
            <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Avatar: {
        borderWidth: 4,
        borderColor: COLORS.white

    }
})