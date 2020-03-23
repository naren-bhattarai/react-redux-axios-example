import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

const Posts = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('mounted');
    dispatch(fetchPosts());
    return () => console.log('unmounting...');
  }, [dispatch]);

  const store = useSelector(state => state.store);
  let loadPosts;
  
  if (store && store.posts.length > 0) {
    const { posts } = store;
    loadPosts = posts && posts.slice(0,10).map((post) => {
      const { id, title } = post;
      let num = id < 11 ? `0${ id-1 }` : id-1;
      return (
        <li key={ num }>
          <strong>ID: </strong>{ num } - <strong>Title: </strong>{title}
        </li>
      );
    });
  } else {
    loadPosts = <div>Loading...</div>
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        { loadPosts }
      </ul>
    </div>
  );
}
export default Posts;