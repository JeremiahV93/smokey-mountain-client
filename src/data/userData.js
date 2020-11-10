import axios from 'axios';

const url = 'http://localhost:8088';

// const getUserbyID = (id) => new Promise((resolve, reject) => {
//   axios.get(`${url}/users/${id}`)
//     .then((res) => resolve(res))
//     .catch((err) => reject(err));
// });

const getUserbyID = (id) => axios.get(`${url}/users/${id}`);

const authUserByEmail = (email) => axios.get(`${url}/user?email=${email}`);

export default { getUserbyID, authUserByEmail };
