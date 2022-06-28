import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, parameters } from '../global/Styles'
import { Icon } from "@rneui/themed";


export default function FoodCard({
    onPressFoodCard,
    resturantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReviews,
    businessAddress,
    farAway,
    averageReviews,
    images,
    screenWidth
}) {
    return (
        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <Image
                    style={{ ...styles.image, width: screenWidth }}
                    source={images}
                />
                <View>
                    <View>
                        <Text style={styles.resturantName}>{resturantName}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.distance}>
                            <Icon
                                type='material'
                                name='place'
                                color={COLORS.grey2}
                                size={18}
                                iconStyle={{
                                    marginTop: 3
                                }}
                            />
                            <Text style={styles.minute}>{farAway} Min</Text>
                        </View>

                        <View style={{ flex: 9, flexDirection: 'row' }}>
                            <Text style={styles.address}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>


            {/* review */}
            <View style={styles.review}>
                <Text style={styles.averagereview}>{averageReviews}</Text>
                <Text style={styles.numberOfReviews}>{numberOfReviews} reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.grey4,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150
    },
    resturantName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.grey1,
        marginTop: 5,
        marginLeft: 10
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: COLORS.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    minute: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: COLORS.grey3
    },
    address: {
        fontSize: 12,
        paddingTop: 5,
        color: COLORS.grey2,
        paddingHorizontal: 10
    },
    review: {
        position: 'absolute',
        right: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12
    },

    averagereview: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    },
    numberOfReviews: {
        fontSize: 13,
        color: COLORS.white,
        marginRight: 0,
        marginLeft: 0
    }

})