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

    default:
      return initialState;

  }

  return newState;
}

export default reducer;
