/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function InfoCard({title, description, imageRoute}) {
  return (

    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={imageRoute} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        fontSize: 15,
    },
    image: {
        height: 150,
        width: 90,
        margin: 20,
    },
});
