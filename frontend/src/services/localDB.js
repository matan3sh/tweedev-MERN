const gDefaultCustomers = [
  {
    name: 'Sam Adams',
    gender: 'Male',
    email: 'sam@gmail.com',
    phone: '0526789367',
    age: 33,
    orders: 2,
  },
  {
    name: 'James Patterson',
    gender: 'Female',
    email: 'james@gmail.com',
    phone: '0528939367',
    age: 42,
    orders: 9,
  },
  {
    name: 'Steve Witon',
    gender: 'Male',
    email: 'steve@gmail.com',
    phone: '0458966367',
    age: 21,
    orders: 3,
  },
  {
    name: 'John Doe',
    gender: 'Male',
    email: 'john@gmail.com',
    phone: '0528935787',
    age: 25,
    orders: 1,
  },
  {
    name: 'Steve Kerr',
    gender: 'Male',
    email: 'steve@gmail.com',
    phone: '0528937807',
    age: 35,
    orders: 2,
  },
];

function getDefaultData() {
  return gDefaultCustomers;
}

export default {
  getDefaultData,
};
