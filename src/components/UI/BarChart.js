import React from 'react';
import { View } from 'react-native';
import { Text, H1, H3 } from 'native-base';
import commonColor from '../../../native-base-theme/variables/commonColor';

const findMax = (item, max) => {
  console.log(item, max);
  return (0.5 * item) / max;
};

const BarChart = ({ data, labels, max }) => (
  <View style={{ flexDirection: 'column', padding: 10, marginTop: 40 }}>
    {data.map((item, index) => (
      <View
        style={{
          paddingVertical: 3,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ flex: 0.3, color: commonColor.brandDark, fontSize: 20, paddingHorizontal: 5 }}
        >
          {labels[index]}
        </Text>
        <View
          style={{
            flex: findMax(item, max),
            height: 40,
            backgroundColor: '#CF3794',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        ></View>
        <Text
          style={{ flex: 0.2, color: commonColor.brandDark, fontSize: 20, paddingHorizontal: 5 }}
        >
          ${item}
        </Text>
      </View>
    ))}
  </View>
);

export default BarChart;
