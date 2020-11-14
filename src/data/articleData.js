import axios from 'axios';

const url = 'http://localhost:8088';

const getAllArticles = () => axios.get(`${url}/articles`);

const getSingleArticlebyId = (articleId) => axios.get(`${url}/articles/${articleId}`);

const getArticlesByCategoryId = (categoryId) => axios.get(`${url}/articles/${categoryId}`);

const deleteArticle = (id) => axios.delete(`${url}/articles/${id}`);

const createArticle = (newArticle) => axios.post(`${url}/articles`, newArticle);

const updateArticle = (id, editedArticle) => axios.put(`${url}/articles/${id}`, editedArticle);

export default {
  getSingleArticlebyId, deleteArticle, createArticle, updateArticle, getArticlesByCategoryId, getAllArticles,
};
