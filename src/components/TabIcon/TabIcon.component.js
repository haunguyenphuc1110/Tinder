import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../assets';
import styles from './TabIcon.styles';

const TabIcon = (props) => {
  const { name, isSelected, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.line, { borderColor: isSelected ? COLORS.green : COLORS.white }]}/>
      <Icon name={name} size={28} color={ isSelected ? COLORS.green : COLORS.black } onPress={onPress}/>
    </View>
  )
}

export default TabIcon;
