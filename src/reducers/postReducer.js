import { FETCH_POSTS, NEW_POST, FETCH_USERS } from '../actions/types';

const initialState = {
  posts: [],
  users: []
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: payload.data
      }
    case NEW_POST:
      return {
        ...state,
        posts: [...state.posts, payload]
      }

      case FETCH_USERS:
        return {
          ...state,
          users: [...state.users, payload]
        }

    default:
      return state;
  };
};

export default postReducer;