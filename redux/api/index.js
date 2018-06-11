import axios from 'axios';

function getPost(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export default { getPost };
