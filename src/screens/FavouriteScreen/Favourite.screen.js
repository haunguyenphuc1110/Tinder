import React from 'react';
import Favourite from './Favourite.view';
import { withNavigationFocus } from 'react-navigation';

const FavouriteScreen = (props) => <Favourite {...props}/>;

export default withNavigationFocus(FavouriteScreen);