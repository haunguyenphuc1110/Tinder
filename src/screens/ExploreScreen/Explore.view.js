import React from 'react';
import { 
  View, 
  Dimensions, 
  Animated, 
  PanResponder ,
  AsyncStorage
} from 'react-native';
import { getRandomUser } from '../../api/call';

import City from '../../components/City/City.component';
import Filter from '../../components/Filter/Filter.component';
import Card from '../../components/Card/Card.component';
import styles from './Explore.styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

class Explore extends React.Component {

  constructor() {
    super()
    this.position = new Animated.ValueXY()
    this.state = {
      user: {},
      favourite: []
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })
  }

  componentDidMount() {
    this.getRandomUser();
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > SWIPE_THRESHOLD) {
          this.addFavouriteProfile(this.state.user);
          this.getRandomUser();
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.position.setValue({ x: 0, y: 0 })
          })
        }
        else if (gestureState.dx < -SWIPE_THRESHOLD) {
          this.getRandomUser();
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.position.setValue({ x: 0, y: 0 })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  getRandomUser = async () => {
    try{
      const response = await getRandomUser();
      this.setState({
        user: response.results[0].user
      })
    } catch (err) {
      console.log(err);
    }
  }

  addFavouriteProfile = (profile) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        favourite: [...prevState.favourite, profile]
      };
      this.saveProfiles(newState.favourite);
      return { ...newState };
    });
  };

  saveProfiles = profile => {
    AsyncStorage.setItem('Profiles', JSON.stringify(profile));
  };

  renderUsers = () => {
    const { user } = this.state;
      return (
        <Card 
          user={user}
          panHandlers={this.PanResponder.panHandlers}
          rotateAndTranslate={this.rotateAndTranslate}
          likeOpacity={this.likeOpacity}
          dislikeOpacity={this.dislikeOpacity}
        />
      )
  }

  render() {
    console.log(this.state.user);
    return (
      <View style={styles.main}>
        <View style={styles.top}>
          <City/>
          <Filter/>
        </View>
        <View style={styles.content}>
          {this.renderUsers()}
        </View>
      </View>
    );
  }
}

export default Explore;
