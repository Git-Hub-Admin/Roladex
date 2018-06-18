import {
  IMPORT_CONTACTS,
  UPDATE_CONTACTS,
} from '../actions/contacts';

const initialState = {
  contacts: [
    {
      id: 1,
      recordID: '1',
      useRoladex: true,
      name: 'Wonder Woman',
      phone: '6193098258',
      email: 'vip@berkeley.edu',
      address: 'here',
      last_updated: '2010-10-10',
    },
    {
      id: 2,
      recordID: '2',
      useRoladex: true,
      name: 'Super Woman',
      phone: '6193098258',
      email: 'vip@berkeley.edu',
      address: 'here',
      last_updated: '2010-10-10',
    },
    {
      id: 3,
      recordID: '3',
      useRoladex: true,
      name: 'Spider Woman',
      phone: '6193098258',
      email: 'vip@berkeley.edu',
      address: 'here',
      last_updated: '2010-10-10',
    },
    {
      id: 4,
      recordID: '4',
      useRoladex: true,
      name: 'Bat Woman',
      phone: '6193098258',
      email: 'vip@berkeley.edu',
      address: 'here',
      last_updated: '2010-10-10',
    },
  ],
  last_updated: '2010-11-11',
  status: 'none',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
    case UPDATE_CONTACTS:
    default:
      return state;
  }
};

