import axios from 'axios';

const url = 'http://localhost:8088';

const headers = () => (
  {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }
);

const createHeaders = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

const getAllTags = () => axios.get(`${url}/tags`, headers());

const getTagsById = (id) => axios.get(`${url}/tags/${id}`);

const deleteTag = (id) => axios.delete(`${url}/tags/${id}`, headers());

const createTag = (newTag) => axios.post(`${url}/tags`, newTag, createHeaders);

const updateTag = (id, editedTag) => axios.put(`${url}/tags/${id}`, editedTag, createHeaders);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllTags, getTagsById, deleteTag, createTag, updateTag,
};
