import axios from 'axios';

const url = 'http://localhost:8088';

const getAllCats = () => axios.get(`${url}/categories`);

const deleteCat = (id) => axios.delete(`${url}/categories/${id}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllCats, deleteCat };
