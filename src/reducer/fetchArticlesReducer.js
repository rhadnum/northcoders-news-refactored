import * as types from '../actions/types';

const initialState = {
  articles: []
};

function fetchArticlesReducer (prevState, action) {
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

    //FETCH ARTICLE

    case types.FETCH_ARTICLE_SUCCESS:
      newState.currArticle = action.data;
      break;

    case types.FETCH_ARTICLE_ERROR:
      newState.error = action.err;
      break;

  }

  return newState;
}

export default fetchArticlesReducer;