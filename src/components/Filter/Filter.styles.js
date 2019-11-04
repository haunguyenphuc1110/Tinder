import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  main: {
		backgroundColor: COLORS.lightGray,
		padding: 10,
		borderRadius: 20,
    width: 90,
		shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5
	},
	row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  text: {
    color: COLORS.darkGray,
		fontSize: 13
  }
});

export default styles;