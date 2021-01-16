import axios from 'axios';

const url = 'http://localhost:8088';

const headers = () => (
  {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }
);

const commentsByPostId = (postId) => axios.get(`${url}/comments/${postId}`, headers());

const addComment = (commentobj) => axios.post(`${url}/comments`, commentobj, headers());

const deleteComment = (commentId) => axios.delete(`${url}/comments/${commentId}`, headers());

const updateComment = (commentId, commentObj) => axios.put(`${url}/comments/${commentId}`, commentObj, headers());

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  commentsByPostId, addComment, deleteComment, updateComment,
};
