import axios from 'axios';

const PATH = 'contacts/';

const query = async () => {
  try {
    const res = await axios.get(PATH);
    return res.data.contacts;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
