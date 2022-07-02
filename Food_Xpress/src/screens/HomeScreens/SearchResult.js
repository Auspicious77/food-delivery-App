import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React from 'react'
import SearchCard from '../../components/SearchCard';
import { resturantData } from '../../components/Data';
import { COLORS } from '../../global/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResult = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
        <View>

            <FlatList
                style={{ backgroundColor: COLORS.cardbackground }}
                data={resturantData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                <SearchCard
                screenwidth={SCREEN_WIDTH}
                images={resturantData[0].image}
                averageReview={resturantData[1].averageReview}
                numberOfReview={resturantData[0].numberofReviews}
                restaurantName={resturantData[0].resturantName}
                farAway={resturantData[0].farAway}
                businessAddress={resturantData[0].businessAddress}
                productData={item.productData}
                OnPressRestaurantCard={() => {
                    navigation.navigate("ResturantHomeScreen",
                        { id: index, restaurant: item.resturantName })
                }}

            />
            )}

            ListHeaderComponent ={
                <View>
                <Text style={styles.listHeader}>{resturantData.length} Search results for {route.params.item}</Text>
               </View>   
            } 

            showsVerticalScrollIndicator ={false}
                />


  

        </View>
        </View>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    listHeader: {
        color: COLORS.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: "bold"
    }
})