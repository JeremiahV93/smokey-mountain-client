import axios from 'axios';

const url = 'http://localhost:8088';

const getAllTags = () => axios.get(`${url}/tags`);

const getTagsById = (id) => axios.get(`${url}/tags/${id}`);

const deleteTag = (id) => axios.delete(`${url}/tags/${id}`);

const createTag = (newTag) => axios.post(`${url}/tags`, newTag);

const updateTag = (id, editedTag) => axios.put(`${url}/tags/${id}`, editedTag);

export default {
  getAllTags, getTagsById, deleteTag, createTag, updateTag,
};
