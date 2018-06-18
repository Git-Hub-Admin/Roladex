import { combineReducers } from 'redux';

import currencies from './currencies';
import theme from './theme';
import contacts from './contacts';

export default combineReducers({
  contacts,
  currencies,
  theme,
});
