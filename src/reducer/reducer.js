import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedTopic: null,
  topics: []
};

function reducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case types.FETCH_ARTICLES_SUCCESS:
      newState.articles = action.data.articles;
      break;

    case types.FETCH_TOPICS_SUCCESS:
      newState.topics = action.data.topics;
      break;

    case types.FETCH_ARTICLE_SUCCESS:
      newState.currArticle = action.data;
      break;

    case types.FETCH_COMMENTS_SUCCESS:
      newState.currArticleComments = action.data.comments;
      break;

    case types.POST_COMMENT_SUCCESS:
      newState.currArticleComments = prevState.currArticleComments.concat([action.comment]);
      break;

    default:
      return prevState;

  }

  return newState;
}

export default reducer;
