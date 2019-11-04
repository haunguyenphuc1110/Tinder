import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  line: {
    height: 1, 
    width: 30, 
    borderWidth: 1, 
    marginBottom: 5, 
    borderColor: COLORS.white
  }
});

export default styles;