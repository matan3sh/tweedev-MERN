import service from '../services/service';
import { Storage } from '../services/storageService';

const COLLECTION = 'contacts';

export const loadContacts = (filter = '') => async (dispatch) => {
  try {
    let res = Storage.loadFromStorage(COLLECTION);
    if (!res) {
      res = await service.query();
      Storage.storeToStorage(COLLECTION, res);
    }
    const contacts = res.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    dispatch({ type: 'SET_CONTACTS', payload: contacts });
  } catch (err) {
    console.log(err);
  }
};
