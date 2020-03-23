import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/postActions'

const Users = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('users mounted');
    dispatch(fetchUsers());
    return () => console.log('users unmounting...');
  }, [dispatch]);

  const store = useSelector(state => state.store);
  let loadUsers;
  
  if (store && store.users.length > 0) {
    const { users } = store;
    loadUsers = users && users[0].map((user) => {
      const { id, email } = user;

      let num = id < 11 ? `0${ id-1 }` : id-1;
      return (
        <li key={ num }>
          <strong>ID: </strong>{ num } - <strong>Email: </strong>{email}
        </li>
      );
    });
  } else {
    loadUsers = <div>Loading users...</div>
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        { loadUsers }
      </ul>
    </div>
  );
}
export default Users;