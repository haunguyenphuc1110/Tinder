import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  top: {
		paddingTop: 30,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: { 
    paddingBottom: 10, 
    fontSize: 22, 
    color: COLORS.darkGray 
  },
});
export default styles;