import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const Loading = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',backgroundColor:Colors.brandPrimary }}>
    <ActivityIndicator size="large" color={Colors.brandInfo} />
  </View>
);

export default Loading;
