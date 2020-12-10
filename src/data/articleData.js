import axios from 'axios';

const url = 'http://localhost:8000';

const headers = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
};

const getAllArticles = () => axios.get(`${url}/posts`, headers);

const getSingleArticlebyId = (articleId) => axios.get(`${url}/articles/${articleId}`);

const getArticlesByCategoryId = (categoryId) => axios.get(`${url}/article_category/${categoryId}`);

const deleteArticle = (id) => axios.delete(`${url}/posts/${id}`, headers);

const createArticle = (newArticle) => axios.post(`${url}/articles`, newArticle);

const updateArticle = (id, editedArticle) => axios.put(`${url}/articles/${id}`, editedArticle);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSingleArticlebyId, deleteArticle, createArticle, updateArticle, getArticlesByCategoryId, getAllArticles,
};
