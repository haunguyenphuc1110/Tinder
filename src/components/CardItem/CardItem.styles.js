import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../assets';

const fullWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
		borderRadius: 8,
		alignItems: "center",
    margin: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  image: {
    borderRadius: 8,
    width: fullWidth / 2 - 30,
    height: 170,
    margin: 0
  },
  name: {
    paddingTop: 10,
    paddingBottom: 5,
    color: COLORS.black,
    fontSize: 16
  },
  dob: {
    paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
  },
  dobText: {
    color: COLORS.gray,
    fontSize: 14,
    fontWeight: '500'
  }
});

export default styles;