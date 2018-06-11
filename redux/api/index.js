import axios from 'axios';

const ASSIST = '/assist';

const assistInstance = axios.create({
  baseURL: ASSIST,
  headers: {
    Accept: 'application/json',
    'wmp-user-agent-type': 'PC'
  }
});

export const getCommon = mid => {
  assistInstance.defaults.headers.common['wmp-mid'] = mid;
  return assistInstance.get('/common');
};

function getPost(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export default { getCommon, getPost };
