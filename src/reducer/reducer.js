import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null,
  topics: []
};

function reducer (prevState, action) {
  prevState = prevState || initialState;
  const newState = Object.assign({}, prevState);

  switch (action.type) {

    //FETCH ARTICLES

    case types.FETCH_ARTICLES_SUCCESS:
      newState.articles = action.data;
      break;

    case types.FETCH_ARTICLES_ERROR:
      newState.error = action.error;
      break;

      //FETCH TOPICS

    case types.FETCH_TOPICS_SUCCESS:
      newState.topics = action.data;
      break;

    case types.FETCH_TOPICS_ERROR:
      newState.error = action.error;
      break;

      //FETCH ARTICLE

    case types.FETCH_ARTICLE_SUCCESS:
      newState.currArticle = action.data;
      break;

    case types.FETCH_ARTICLE_ERROR:
      newState.error = action.err;
      break;

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
