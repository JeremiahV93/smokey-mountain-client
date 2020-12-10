import axios from 'axios';

const url = 'http://localhost:8000';

// const getUserbyID = (id) => new Promise((resolve, reject) => {
//   axios.get(`${url}/users/${id}`)
//     .then((res) => resolve(res))
//     .catch((err) => reject(err));
// });

const getUserbyID = (id) => axios.get(`${url}/users/${id}`);

// const authUser = (usernamePassword) => axios({
//   method: 'POST',
//   url: `${url}/login`,
//   data: usernamePassword,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });

const authUser = (usernamePassword) => axios.post(`${url}/login`, usernamePassword);

const addUser = (userobj) => axios.post(`${url}/register`, userobj);

const updateUser = (id, userObj) => axios.put(`${url}/users/${id}`, userObj);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserbyID, authUser, addUser, updateUser,
};
