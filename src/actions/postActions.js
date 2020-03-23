import axios from 'axios';
import { FETCH_POSTS, NEW_POST, FETCH_USERS } from './types';

export const fetchPosts = () => dispatch => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  axios.get(url).then(posts => {
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
  });
};

export const fetchUsers = () => dispatch => {
  const url = 'https://reqres.in/api/users';
  axios.get(url).then(users => {
    dispatch({
      type: FETCH_USERS,
      payload: users.data.data
    });
  });
};



export const createPost = postTitle => dispatch => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  axios.post(url).then(post => {
    dispatch({
      type: NEW_POST,
      payload: {
        id: post.data.id,
        title: postTitle
      }
    });
  });
};

