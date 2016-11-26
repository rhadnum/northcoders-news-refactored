import * as types from '../actions/types';

const initialState = {
  selectedTopic: null,
  topics: []
};

function reducer (prevState, action) {
  prevState = prevState || initialState;
  const newState = Object.assign({}, prevState);

  switch (action.type) {

      //FETCH TOPICS

    case types.FETCH_TOPICS_SUCCESS:
      newState.topics = action.data;
      break;

    case types.FETCH_TOPICS_ERROR:
      newState.error = action.error;
      break;


      //FETCH USER PROFILE

    case types.FETCH_USER_SUCCESS:
      newState.currUserProfile = action.data
      break;

    case types.FETCH_USER_ERROR:
      newState.error = action.error
      break;

    default:
      return prevState;

  }

  return newState;
}

export default reducer;
