/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import { InfoCard } from '../components/InfoCard';

export function HomeScreen() {

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'left', margin: 10}}>
      <InfoCard
       title={'Producto 1'}
       description={'El producto más vendido'}
       imageRoute={require('../assets/images/carritoGolf.jpg')}
       />
    </View>
  );
}
