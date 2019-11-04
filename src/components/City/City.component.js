import React from 'react';
import styles from './City.styles';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const City = () => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.row}>
        <Icon name="marker"/> 
        <Text style={styles.text}>California</Text>
      </View>
    </TouchableOpacity>
  );
};

export default City;