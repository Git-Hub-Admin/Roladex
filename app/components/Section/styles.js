import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '$white',
    borderBottomColor: '$border',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 0,
  },
});
