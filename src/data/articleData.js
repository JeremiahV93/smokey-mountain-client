import axios from 'axios';

const url = 'http://localhost:8088';

const getArticleByUserId = (userId) => axios.get(`${url}/articles/${userId}`);

const getArticlesByCategoryId = (categoryId) => axios.get(`${url}/articles/${categoryId}`);

const deleteArticle = (id) => axios.delete(`${url}/articles/${id}`);

const createArticle = (newArticle) => axios.post(`${url}/articles`, newArticle);

const updateArticle = (id, editedArticle) => axios.put(`${url}/articles/${id}`, editedArticle);

export default {
  getArticleByUserId, deleteArticle, createArticle, updateArticle, getArticlesByCategoryId,
};
