/* eslint-disable react/prop-types */
import { H1, H3 } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import commonColor from '../../../native-base-theme/variables/commonColor';
import BarChart from '../UI/BarChart';

const TopVendor = ({ item }) => (
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
    <H1 style={{ textAlign: 'center', color: commonColor.brandDark, fontWeight: 'bold' }}>
      These were your top vendors in March
    </H1>
    <H3 style={{ textAlign: 'center', color: commonColor.brandDark }}>
      We hope you bought some for everyone :)
    </H3>
    <BarChart
      data={item.data.vendorAmounts}
      labels={item.data.vendorLabels}
      max={Math.max(...item.data.vendorAmounts)}
    />
  </View>
);

export default TopVendor;
