import storageService from './storageService';
import db from './localDB';

const KEY = 'customers';
var gCustomers = null;
_createCustomers();

function _createCustomers() {
  gCustomers = storageService.load(KEY);
  if (gCustomers === null) {
    gCustomers = db.getDefaultData();
    storageService.store(KEY, gCustomers);
  }
}

const query = async (filter) => {
  try {
    let filteredCustomers = gCustomers.filter((customer) =>
      customer.name.toLowerCase().includes(filter.toLowerCase())
    );
    filteredCustomers = filter === '' ? gCustomers : filteredCustomers;
    return Promise.resolve(filteredCustomers);
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
