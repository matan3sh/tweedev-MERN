import api from './api';
import storageService from './storageService';

const API_KEY = 'flOjgP4v4TYTzewvKX984qMI0ZrxfoSY';

const query = async (filter) => {
  if (filter === '') return;
  try {
    let res = storageService.load(filter);
    if (res === null) {
      res = await api.get(
        `/gifs/search?api_key=${API_KEY}&q=${filter}&limit=25&offset=0&rating=g&lang=en`
      );
      storageService.clear();
      storageService.store(filter, res.data.data);
      return res.data.data;
    } else {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
