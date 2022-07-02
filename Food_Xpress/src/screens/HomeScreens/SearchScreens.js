import { View, Text, StyleSheet, Dimensions ,FlatList, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React from 'react'
import SearchComponent from '../../components/SearchComponent'
import { filterData } from '../../components/Data'
import { COLORS, SIZES } from '../../global/Styles'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreens({navigation}) {
  return (
    <View style={styles.conatiner}>
      <SearchComponent navigation={navigation}/>
        <View style={{marginVertical: SIZES.padding*2.3}}>

        {/* FlatList */}
        <View style={{marginTop: 20}}>
        <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
        ListFooterComponent={<Footer/>}
        data={filterData}
        style={{marginBottom: 1}}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
          <TouchableWithoutFeedback 
          onPress={()=>{navigation.navigate('SearchResult', {item: item.name})}}>
            <View style={styles.ImageView}>
                <ImageBackground
                style={styles.Image}
                source={item.image}>
                  <View style={styles.textView}>
                    <Text style={{color: COLORS.white, textAlign: 'center'}}>{item.name}</Text>
                  </View>
                </ImageBackground>
            </View>

          </TouchableWithoutFeedback>
        )}
        />
         </View>
        </View>
    </View>
  )
}

const Footer = () =>{
  return(
    <View style={{marginTop: 10}}>
    <View style={{}}>
    <FlatList
    horizontal={false}
    showsVerticalScrollIndicator={false}
    numColumns={2}
    ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
    data={filterData}
    style={{marginBottom: 10}}
    keyExtractor={item=>item.id}
    renderItem={({item})=>(
      <TouchableWithoutFeedback>
        <View style={styles.ImageView}>
            <ImageBackground
            style={styles.Image}
            source={item.image}>
              <View style={styles.textView}>
                <Text style={{color: COLORS.white, textAlign: 'center'}}>{item.name}</Text>
              </View>
            </ImageBackground>
        </View>

      </TouchableWithoutFeedback>
    )}
    />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  ImageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH*0.4475,
    height: SCREEN_WIDTH*0.4475,
    marginLeft: SCREEN_WIDTH*0.035,
    marginBottom: SCREEN_WIDTH*0.035,
  },

  Image: {
    height: SCREEN_WIDTH*0.4475,
    width: SCREEN_WIDTH*0.4475,
    borderRadius: 10 
  },
  listHeader: {
    fontSize: 16,
    color: COLORS.grey2,
    paddingBottom: 10,
    marginLeft: 12
  }, 
  textView: {
    height: SCREEN_WIDTH*0.4475,
    width: SCREEN_WIDTH*0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52,52,52,0.3)'

  }
})