import React from 'react';
import { Animated, View, Text, Image } from 'react-native';
import styles from './Card.styles';

import TabIcon from '../TabIcon/TabIcon.component';

const  Card = (props) => {
  const { user, panHandlers, rotateAndTranslate, likeOpacity, dislikeOpacity } = props;
  return (
    <Animated.View
      {...panHandlers}
      style={[rotateAndTranslate, styles.userContainer ]}>
      <Animated.View 
        style={[{ opacity: likeOpacity, transform: [{ rotate: '-30deg' }]}, styles.likeContainer ]}>
        <Text style={styles.like}>LIKE</Text>

      </Animated.View>

      <Animated.View 
        style={[{ opacity: dislikeOpacity, transform: [{ rotate: '30deg' }]}, styles.dislikeContainer ]}>
        <Text style={styles.dislike}>NOPE</Text>
      </Animated.View>

      
      <View style={styles.userContent}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={{uri: user ? user.picture : ""}} />
        </View>
        <Text style={styles.title}>
          My address is
        </Text>
        <Text style={styles.content}>
          {user? user.location ? user.location.street : "" : ""}
        </Text>
        <View style={styles.tabBar}>
          <TabIcon name={"globe"}/>
          <TabIcon name={"calendar"}/>
          <TabIcon name={"map-marked"} isSelected={true}/>
          <TabIcon name={"phone"}/>
          <TabIcon name={"lock"}/>
        </View>
      </View>

    </Animated.View>
  )
}


export default Card;

