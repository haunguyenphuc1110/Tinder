import React from 'react';
import {
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenIds from './screenIds';
import { COLORS } from '../assets';

import ExploreScreen from '../screens/ExploreScreen/Explore.screen';
import FavouriteScreen from '../screens/FavouriteScreen/Favourite.screen';


const AppNavigator = createBottomTabNavigator(
  {
    [ScreenIds.EXPLORE]: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='search' color={tintColor} size={18} />
        ),
      }
    },
    [ScreenIds.FAVOURITE]: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarLabel: 'FAVOURITE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='user' color={tintColor} size={18} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.appColor,
      inactiveTintColor: COLORS.darkGray,
      style: {
        backgroundColor: COLORS.lightGray,
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
)

const MyStackNavigator = createStackNavigator(
  {
    [ScreenIds.HOME]: {
      screen: AppNavigator
    }
  },
  {
    initialRouteName: ScreenIds.HOME,
    defaultNavigationOptions: {
      header: null
    }
  }
);

const HomeNavigator = createAppContainer(MyStackNavigator);

export default HomeNavigator;