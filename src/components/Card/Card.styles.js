import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    height: SCREEN_HEIGHT - 200, 
    width: SCREEN_WIDTH - 20, 
    padding: 10, 
    margin: 10, 
    borderRadius: 5, 
    position: 'absolute',
    backgroundColor: COLORS.lightGray,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  likeContainer: {
    position: 'absolute', 
    top: 30, 
    left: 20, 
    zIndex: 1000
  },
  dislikeContainer: {
    position: 'absolute', 
    top: 30, 
    right: 20, 
    zIndex: 1000
  },
  like: {
    borderWidth: 1, 
    borderColor: COLORS.green, 
    color: COLORS.green, 
    fontSize: 32, 
    fontWeight: '800', 
    padding: 10 
  },
  dislike: {
    borderWidth: 1, 
    borderColor: COLORS.red, 
    color: COLORS.red, 
    fontSize: 32, 
    fontWeight: '800', 
    padding: 10 
  },
  imgContainer: {
    position: 'absolute', 
    zIndex: 9999, 
    left: SCREEN_WIDTH/2 - 85, 
    top: -100, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 100, 
    padding: 4, 
    backgroundColor: COLORS.white
  },
  image: {
    height: 150, 
    width: 150, 
    resizeMode: 'cover', 
    borderRadius: 100
  },
  userContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1, 
    borderColor: COLORS.lightGray, 
    position: 'absolute', 
    bottom: 0, 
    width: SCREEN_WIDTH -20, 
    height: 2*SCREEN_HEIGHT/3 - 130, 
    backgroundColor: 'white'
  },
  title: {
    fontSize: 16,
    marginTop: 80
  },
  content: {
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.black,
    textAlign: 'center'
  },
  tabBar: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    width: 250, 
    height: 50,
    marginTop: 40
  }
});

export default styles;