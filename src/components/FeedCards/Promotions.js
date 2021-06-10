/* eslint-disable react/prop-types */
import { H1, H3 } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';
import { Button } from 'native-base';

const Promotions = ({ item }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: item.data.cardColor,
      justifyContent: 'flex-start',
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
    <H1 style={{ textAlign: 'center', color: commonColor.inverseTextColor, fontWeight: 'bold' }}>
      Hey {item.data.mood}, We have partnered with your favorite vendors, Check the below vendors
      and save big :)
    </H1>
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
      }}
    >
      {item.data.partnerDiscounts.map((partner) => {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return (
          <View
            style={{
              margin: 10,
              width: '41%',
              flexDirection: 'column',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 2,
              backgroundColor: randomColor,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: 20,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ color: commonColor.brandDark, fontSize: 20, fontWeight: 'bold' }}
            >
              {partner.partner}
            </Text>
            <Text style={{ color: commonColor.brandDark, fontSize: 40, fontWeight: 'bold' }}>
              {partner.percentDiscount}%
            </Text>
            <Button block info style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold' }}> Redeem </Text>
            </Button>
          </View>
        );
      })}
    </View>
  </View>
);

export default Promotions;
