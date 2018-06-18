import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  smallText: {
    color: '$white',
    fontSize: 12,
    textAlign: 'center',
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '$textColor',
  },
});
