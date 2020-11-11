import axios from 'axios';

const url = 'http://localhost:8088';

const getAllArticles = () => axios.get(`${url}/articles`);

const getArticlesByUserId = (userId) => axios.get(`${url}/articles/${userId}`);

const getArticlesByCategoryId = (categoryId) => axios.get(`${url}/articles/${categoryId}`);

const deleteArticle = (id) => axios.delete(`${url}/articles/${id}`);

const createArticle = (newArticle) => axios.post(`${url}/articles`, newArticle);

const updateArticle = (id, editedArticle) => axios.put(`${url}/articles/${id}`, editedArticle);

export default {
  getArticlesByUserId, deleteArticle, createArticle, updateArticle, getArticlesByCategoryId, getAllArticles,
};
