import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
		paddingTop: Platform.OS === 'ios' ? 50 : 20,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
  },
  content: {
    flex: 1
  }
});
export default styles;