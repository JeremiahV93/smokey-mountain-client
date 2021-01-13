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

// eslint-disable-next-line import/no-anonymous-default-export
export default { commentsByPostId, addComment };
