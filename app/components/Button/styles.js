import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const pbWidth = Dimensions.get('window').width * 0.75;

export default EStyleSheet.create({
  $pbBackgroundColor: '$buttonColor',
  $pbBackgroundColorModifier: 0.3,
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$textColor',
    fontSize: 16,
    fontWeight: '500',
  },

  pbContainer: {
    alignItems: 'center',
    marginVertical: 12,
    borderRadius: 35,
    width: pbWidth,
  },
  pbWrapper: {
    alignItems: 'center',
    backgroundColor: '$pbBackgroundColor',
    width: '100%',
    borderRadius: 35,
  },
  pbText: {
    color: '$textColor',
    fontSize: 20,
    fontWeight: '300',
    paddingVertical: 15,
    textAlign: 'center',
    width: '100%',
  },
});
