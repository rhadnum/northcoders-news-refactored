
import * as types from '../actions/types';

let initialState = {
  currArticleComments: ['Loading'],
  error: ''
}

function fetchArticlesReducer (prevState, action) {
  prevState = prevState || initialState;
  const newState = Object.assign({}, prevState);

  switch (action.type) {

  //FETCH COMMENTS

    case types.FETCH_COMMENTS_SUCCESS:
      newState.currArticleComments = action.data;
      break;

    case types.FETCH_COMMENTS_ERROR:
      newState.error = action.error;
      break;

  //POST COMMENTS

    case types.POST_COMMENT_SUCCESS:
      newState.currArticleComments = prevState.currArticleComments.concat([action.comment]);
      break;

    case types.POST_COMMENT_ERROR:
      newState.error = action.error;
      break;

  //DELETE COMMENTS

    case types.DELETE_COMMENT_SUCCESS:
      newState.currArticleComments = prevState.currArticleComments.filter((com) => com._id !== action.commentId);
      break;

    case types.DELETE_COMMENT_ERROR:
      newState.error = action.error
      break;
  }

  return newState;
}

export default fetchArticlesReducer;