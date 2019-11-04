import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import CardItem from '../../components/CardItem/CardItem.component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Favourite.styles';
import convertDateString from '../../utils/convertDateString';

class Favourite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadedProfiles: false,
      favouriteProfiles: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.loadingProfiles();
    }
  }

  componentDidMount(){
    this.loadingProfiles();
  }

  loadingProfiles = async () => {
    try {
      const favouriteProfiles = await AsyncStorage.getItem('Profiles');
      this.setState({
        loadedProfiles: true,
        favouriteProfiles: favouriteProfiles ? JSON.parse(favouriteProfiles) : {}
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { loadedProfiles, favouriteProfiles } = this.state;

    if (!loadedProfiles){
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Favourite</Text>
            <Icon name="ellipsis-v" />
          </View>
          <FlatList
            numColumns={2}
            data={favouriteProfiles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <CardItem
                  image={item.picture}
                  name={`${item.name.first} ${item.name.last}`}
                  dob={convertDateString(parseInt(item.dob))}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
  
};

export default Favourite;