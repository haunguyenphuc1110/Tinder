import React from 'react';
import styles from './CardItem.styles';

import { Text, View, Image } from 'react-native';

const CardItem = ({
  image,
  name,
  dob
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:image}} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <View style={styles.dob}>
        <Text style={styles.dobText}>{dob}</Text>
      </View>
    </View>
  );
};

export default CardItem;