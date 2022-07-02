import { View, Text, StyleSheet, TouchableWithoutFeedback,TouchableOpacity ,Modal, TextInput, FlatList, Keyboard } from 'react-native'
import React, { useState, useRef } from 'react';
import { COLORS } from '../global/Styles';
import { Icon } from '@rneui/themed';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { filterData } from './Data';
import filter from 'lodash/filter'

export default function SearchComponent({navigation}) {
    const [data, setData] = useState([...filterData])
    const [modalVisible, setmodalVisible] = useState(false)
    const [textinputFocused, settextinputFocused] = useState(true)
    const textInput = useRef(0)

    const contains = ({name}, query) =>{
       if (name.includes(query)){
       return true}
       return false
    }
    const handleSearch = (text)=>{
     const MyData = filter(filterData, user =>{
      return contains(user, text)
     })
     setData([...MyData])
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => { setmodalVisible(true) }}>
                <View style={styles.SearchArea}>
                    <Icon
                        name='search'
                        type='material'
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15, color: COLORS.grey2 }}>What are you looking for?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                animationType='fade'
                transparent={false}
                visible={modalVisible}>
                <View style={styles.modal}>
                    <TouchableWithoutFeedback onPress={() => { setmodalVisible(false) }}>
                        <View style={styles.View1}>
                            <View style={styles.TextInput}>
                                <Animatable.View 
                                animation={textinputFocused? "fadeInRight": "fadeInLeft"}
                                duration={400}
                                >
                                    <Icon
                                        name={textinputFocused ? "arrow-back" : "search"}
                                        onPress={() => {
                                            if (textinputFocused)
                                                setmodalVisible(false)
                                            settextinputFocused(true)
                                        }}
                                        style={styles.icons2}
                                        type='material'
                                        iconStyle={{ marginRight: 5 }}
                                    />
                                </Animatable.View>
                                <TextInput
                                    style={{ width: '90%' }}
                                    placeholder=''
                                    autoFocus={false}
                                    ref={textInput}
                                    onFocus={()=>{
                                        settextinputFocused(true)
                                    }}
                                    onBlur = {()=>{
                                        settextinputFocused(false)
                                    }}
                                    onChangeText={handleSearch}
                                />

                                <Animatable.View animation={textinputFocused? "fadeInLeft": ""}
                                duration={400}>
                                    <Icon
                                        name={textinputFocused ? "cancel" : null}
                                        onPress={() => {
                                            textInput.current.clear()
                                            // handleSearch()
                                        }}
                                        style={{ marginRight: 5 }}
                                        type='material'
                                        iconStyle={{ color: COLORS.grey5 }}
                                    />
                                </Animatable.View>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <FlatList
                        data={data}
                        renderItem={({ item}) => (
                            <TouchableOpacity onPress={() => { 
                                Keyboard.dismiss
                                navigation.navigate('SearchResult', {item: item.name}),
                                ({item: item.name})
                                setmodalVisible(false)
                                settextinputFocused(true)
                             }}>
                                <View style={styles.view2}>
                                    <Text style={{color: COLORS.grey2, fontSize: 15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item=>item.id}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text1: {
        color: COLORS.grey2,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10

    },
    SearchArea: {
        marginTop: 10,
        width: '94%',
        height: 50,
        backgroundColor: COLORS.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.grey4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchicon: {
        fontSize: 24,
        padding: 5,
        color: COLORS.grey2
    },
    View1: {
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    icons2: {
        fontSize: 24,
        padding: 5,
        color: COLORS.grey2
    }
})