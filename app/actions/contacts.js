export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
export const IMPORT_CONTACTS = 'IMPORT_CONTACTS';


export const importContacts = contacts => ({
  type: IMPORT_CONTACTS,
  contacts,
});

export const updateContacts = () => ({
  type: UPDATE_CONTACTS,
});
