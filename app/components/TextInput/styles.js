import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: 'transparent',
    height: INPUT_HEIGHT + 18,
    width: '100%',
    alignItems: 'center',
    paddingTop: 18,
    marginVertical: 10,
    marginHorizontal: 'auto',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  input: {
    width: '100%',
    height: INPUT_HEIGHT,
    fontSize: 18,
    paddingHorizontal: 8,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '$borderColor',
    backgroundColor: 'transparent',
    color: '$inputText',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  labelStyle: {
    position: 'absolute',
    left: 0,
  },
});
