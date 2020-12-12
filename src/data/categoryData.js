import axios from 'axios';

const url = 'http://localhost:8000';

const headers = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
};

const getAllCats = () => axios.get(`${url}/categories`, headers);

const deleteCat = (id) => axios.delete(`${url}/categories/${id}`);

const addCategory = (obj) => axios.post(`${url}/categories`, obj);

const updateCategory = (obj, id) => axios.put(`${url}/categories/${id}`, obj);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllCats, deleteCat, addCategory, updateCategory,
};
