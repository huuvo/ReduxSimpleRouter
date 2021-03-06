import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=API123456';

export function fetchPosts () {
  const reducers = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return ({
    type: FETCH_POSTS,
    payload: reducers
  })
}
