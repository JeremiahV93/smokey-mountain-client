import axios from 'axios';

const url = 'http://localhost:8000';

const headers = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
};

const createHeaders = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

const getAllCats = () => axios.get(`${url}/categories`, headers);

const deleteCat = (id) => axios.delete(`${url}/categories/${id}`);

const addCategory = (obj) => axios.post(`${url}/categories`, obj, createHeaders);

const updateCategory = (obj, id) => axios.put(`${url}/categories/${id}`, obj, createHeaders);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllCats, deleteCat, addCategory, updateCategory,
};
