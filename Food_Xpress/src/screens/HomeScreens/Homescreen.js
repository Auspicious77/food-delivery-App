import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollViewBase, ScrollView, FlatList, Pressable, Image, Dimensions
} from 'react-native'
import React from 'react'
import Homeheader from '../../components/Homeheader'
import { COLORS, parameters, SIZES } from '../../global/Styles'
import { useState } from 'react'
import { Icon } from "@rneui/themed";
import { filterData, resturantData } from '../../components/Data'
import FoodCard from '../../components/FoodCard'
import CountDown from 'react-native-countdown-component'


export default function Homescreen({ navigation }) {
  const [delivery, setDelivery] = useState(true)
  const [indexCheck, setIndexCheck] = useState([0])

  const SCREEN_WIDTH = Dimensions.get('window').width
  return (
    <View style={styles.container}>
      <Homeheader navigation={navigation} />

      <ScrollView stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
      >
        {/* Delivery */}
        <View style={{ backgroundColor: COLORS.white, paddingBottom: 5 }}>
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => { setDelivery(true) }}>
              <View style={{ ...styles.deliverybutton, backgroundColor: delivery ? COLORS.button : COLORS.grey5 }}>
                <Text style={styles.deliverytext}>Delivery</Text>
              </View>
            </TouchableOpacity>
                    
              {/* PickUP */}
            <TouchableOpacity
              onPress={() => {
                setDelivery(false)
                navigation.navigate('MapScreen')
              }}>
              <View style={{ ...styles.deliverybutton, backgroundColor: delivery ? COLORS.grey5 : COLORS.button }}>
                <Text style={styles.deliverytext}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Address */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, }}>
          <View style={{
            flexDirection: 'row', backgroundColor: COLORS.grey4,
            borderRadius: 15, marginVertical: SIZES.padding, marginHorizontal: SIZES.base, height: 30
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                type='material-community'
                name='map-marker'
                color={COLORS.grey1}
                size={24}
              />
              <Text style={{ marginLeft: 5 }}> 22 Salako street</Text>
            </View>

            <View style={{
              flexDirection: 'row', alignItems: 'center', marginHorizontal: SIZES.padding * 2,
              backgroundColor: COLORS.white, borderRadius: 13, width: '21%', marginVertical: 2
            }}>
              <Icon
                type='material-community'
                name='clock-time-four'
                color={COLORS.grey1}
                size={24}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>
          <View style={{ marginRight: 10 }}>
            <Icon
              type='material-community'
              name='tune'
              color={COLORS.grey1}
              size={24}
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesview}>
          <Text style={styles.headertext}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => { setIndexCheck(item.id) }}>
                <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View>
                    <Text style={indexCheck === item.id ? { ...styles.smallcardtextSelected } : { ...styles.smallcardtext }}>{item.name}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        {/* Free Delivery */}
        <View style={styles.categoriesview}>
          <Text style={styles.headertext}>Free Delivery now</Text>
        </View>

        <View>

          {/* CountDown */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginLeft: 15, fontSize: 16, marginTop: -10, marginRight: 5 }}
            >Options changing in</Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: COLORS.lightgreen }}
              digitTxtStyle={{ color: COLORS.white }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'Min', s: 'Sec' }}
            />
          </View>

          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={resturantData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.image}
                  resturantName={item.resturantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReviews={item.averageReview}
                  numberOfReviews={item.numberofReviews}
                />
              </View>
            )}
          />
        </View>


        {/* Promotion available */}
        <View style={styles.categoriesview}>
          <Text style={styles.headertext}>Promotion Available</Text>
        </View>

        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={resturantData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.image}
                  resturantName={item.resturantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReviews={item.averageReview}
                  numberOfReviews={item.numberofReviews}
                />
              </View>
            )}
          />
        </View>

        {/* Resturants in your area */}
        <View>
          <View style={styles.categoriesview}>
            <Text style={styles.headertext}>Restaurants in your Area</Text>
          </View>
          {

            resturantData.map(item => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.image}
                  resturantName={item.resturantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReviews={item.averageReview}
                  numberOfReviews={item.numberofReviews}
                />
              </View>
            ))
          }

        </View>

      </ScrollView>

      {/* Floating button */}
      {
        delivery &&
        <View style={styles.floatbotton}>
          <TouchableOpacity onPress={() => { navigation.navigate('MapScreen') }}>
            <Icon
              name='place'
              type='material'
              size={32}
              color={COLORS.button}
            />
            <Text style={{ color: COLORS.grey2, textAlign: 'center' }}>map</Text>
          </TouchableOpacity>
        </View>
      }
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deliverybutton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5
  },
  deliverytext: {
    marginLeft: 5,
    fontSize: 15
  },
  headertext: {
    color: COLORS.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  categoriesview: {
    backgroundColor: COLORS.grey5,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: 10
  },

  smallCard: {
    borderRadius: 20,
    backgroundColor: COLORS.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },

  smallCardSelected: {
    borderRadius: 20,
    backgroundColor: COLORS.button,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallcardtext: {
    fontWeight: 'bold',
    color: COLORS.grey2
  },
  smallcardtextSelected: {
    fontWeight: 'bold',
    color: COLORS.white
  },
  floatbotton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center'

  }
})