/* eslint-disable react/prop-types */
import { H1, H3 } from 'native-base';
import React from 'react';
import { View, Image, Text } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';

const TopMerhcant = ({ item }) => (
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
    <H1 style={{ textAlign: 'center', color: commonColor.brandDark, fontWeight: 'bold' }}>
      Your top merchant for the month of March is
    </H1>
    <Text
      style={{
        textAlign: 'center',
        color: commonColor.brandDark,
        fontWeight: 'bold',
        fontSize: 40,
      }}
    >
      {item.data.title}
    </Text>

    <Image source={{ uri: item.data.gifURL }} style={{ height: 400 }} />
  </View>
);

export default TopMerhcant;
