import axios from 'axios';

function getPost(id) {
  return axios.get(`/api/posts/${id}`);
}

export default { getPost };
