import React from 'react';
import styles from './Filter.styles';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Filter = () => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.row}>
        <Icon name="filter" /> 
        <Text style={styles.text}>Filters</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Filter;