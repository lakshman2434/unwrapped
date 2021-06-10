/* eslint-disable react/prop-types */
import { H1 } from 'native-base';
import React from 'react';
import { View, Image, Text } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const feedSpendingMoods = {
  traveler: {
    image: require('../../../assets/traveler.png'),
  },
  foodie: {
    image: require('../../../assets/foodie.jpg'),
  },
  fashionista: {
    image: require('../../../assets/traveler.png'),
  },
};

const SpendingMood = ({ item }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: item.data.cardColor,
      justifyContent: 'space-evenly',
      alignContent: 'center',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
      borderRadius: 10,
      padding: 40,
    }}
  >
    <H1 style={{ textAlign: 'center' }} >Your mood for the month is </H1>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: commonColor.inverseTextColor,
      }}
    >
      {item.data.title}
    </Text>
    <Image
      source={feedSpendingMoods[item.data.type].image}
      style={{ height: 400, width:'98%',alignSelf: 'center' }}
      resizeMethod="scale"
      resizeMode="contain"
    />

    <H1 style={{ textAlign: 'center' }}>{item.data.description}</H1>
  </View>
);

export default SpendingMood;
