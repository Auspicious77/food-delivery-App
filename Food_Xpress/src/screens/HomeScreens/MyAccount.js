import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  Switch
} from 'react-native';
import React, {useState} from 'react';
import { images } from '../../../constants';
import icons from '../../../constants';
import { SIZES } from '../../global/Styles';
import { COLORS } from '../../global/Styles';
import { Icon, Avatar } from "@rneui/themed";



const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function MyAccount({navigation}) {
  const [More, setMore] = useState([
    {
      id: '1',
      name: 'Client',
      info: 'Manage Your Profile',
      image: 'Shawama',
      icon: 'map-marker',
      onPress: () => navigation.navigate('Profile'),
    },
    {
      id: '2',
      name: 'Business console',
      info: 'Register your Business',
      image: 'Shawama',
      icon: 'map-marker',
      onPress: () => navigation.navigate('BankStatement'),
    },
    {
      id: '3',
      name: 'Driver console',
      info: 'Change Your Transfer Pin',
      image: 'Shawama',
      icon: 'map-marker',
      onPress: () => navigation.navigate('ChangePin'),
    },
    {
      id: '4',
      name: 'Payment',
      info: 'Verify Your Identity',
      image: 'Shawama',
      icon: 'credit-card-outline',
      onPress: () => navigation.navigate('IdentityVerification'),
    },
    {
      id: '5',
      name: 'Promotion',
      info: 'See Your daily transactions Limit',
      image: 'Shawama',
      icon: 'tag-heart',
      onPress: () => navigation.navigate('AccountLimit'),
    },
    {
      id: '6',
      name: 'Settings',
      info: 'Refer Your Friends and earn money',
      image: 'Shawama',
      icon: 'cog-outline',
      onPress: () => navigation.navigate('Referrals'),
    },
    {
      id: '7',
      name: 'Help',
      info: 'About our contract with you',
      image: 'Shawama',
      icon:  'lifebuoy',
      onPress: () => navigation.navigate('Terms'),
    },
    {
      id: '7',
      name: 'Sign Out',
      info: 'Remove Your Current credentials',
      image: 'Shawama',
      icon: 'logout-variant',
      onPress: () => navigation.navigate('SignOut'),
    },
  ]);

  return (
    
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: COLORS.button,
            height: screenHeight * 0.3,
            borderBottomLeftRadius: SIZES.radius * 3,
            borderBottomRightRadius: SIZES.radius * 3,
          }}>
          <View  style={{
              alignItems: 'center',
              marginTop: SIZES.padding * 2,
            }}>
                <Avatar
                    rounded
                    avatarStyle={styles.Avatar}
                    source={images.Shawama}
                    size= {100}
                />
            </View>
        
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: SIZES.base,
            }}>
            <Text style={{fontSize: SIZES.h1, color: COLORS.white}}>
              John Mark
            </Text>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
           <View style={{marginHorizontal: SIZES.padding, alignItems: 'center'}}>
            <Text style={styles.cart}>0</Text>
            <Text style={styles.cart}>My Favourite</Text>
            </View>

            <View style={{marginHorizontal: SIZES.padding, alignItems: 'center'}}>
            <Text style={styles.cart}>1</Text>
            <Text style={styles.cart}>My Cart</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: SIZES.padding}}>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={More}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{borderRadius: SIZES.radius}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.white,
                    marginHorizontal: SIZES.base,
                    bottom: SIZES.base,
                    paddingHorizontal: SIZES.base * 3,
                    height: SIZES.base * 8,
                    borderRadius: SIZES.radius,
                    marginVertical: SIZES.base,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-around',
                    // alignSelf:'baseline'
                  }}
                  onPress={item.onPress}>
                   <Icon
                type='material-community'
                name= {item.icon}
                color={COLORS.grey1}
                size={24}
              />

                  <View
                    style={{alignContent: 'center', left: SIZES.padding * 2.5}}>
                    <Text
                      style={{
                        fontSize: SIZES.h2,
                        color: COLORS.blue,
                        fontWeight: '800',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: SIZES.h2,
                        color: COLORS.button,
                      }}>
                      {item.info}
                    </Text>
                  </View>
                  {/* <Image
                  source={icons[item.icon]}
                  style={{width: 25, height: 25, left: SIZES.padding * 2}}
                /> */}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View style={{borderTopWidth: 1,  borderTopColor: COLORS.grey5,}}>
          <Text style={styles.preferences}>Preferences</Text>
          <View style={styles.switchText}>
            <Text style={styles.darktheme}>Dark Theme</Text>
            <View style={{}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor= '#f4f3f4'
              />
            </View>
          </View>
        </View>

      </ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  accountInfo: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    textAlign: 'center',
  },
  Avatar: {
    borderWidth: 4,
    borderColor: COLORS.white

},
cart: {
  color: COLORS.white,
  fontSize: 18,
  fontWeight: 'bold'
},
preferences: {
  fontSize: 16,
  color: COLORS.grey2,
  paddingLeft: 20
},
switchText: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 20
  


},
darktheme: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
}
});


