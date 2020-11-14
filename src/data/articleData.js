import axios from 'axios';

const url = 'http://localhost:8088';

const getAllArticles = () => axios.get(`${url}/articles`);

const getArticlesByUserId = (userId) => axios.get(`${url}/articles/${userId}`);

const getArticlesByCategoryId = (categoryId) => axios.get(`${url}/article_category/${categoryId}`);

const deleteArticle = (id) => axios.delete(`${url}/articles/${id}`);

const createArticle = (newArticle) => axios.post(`${url}/articles`, newArticle);

const updateArticle = (id, editedArticle) => axios.put(`${url}/articles/${id}`, editedArticle);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getArticlesByUserId, deleteArticle, createArticle, updateArticle, getArticlesByCategoryId, getAllArticles,
};
