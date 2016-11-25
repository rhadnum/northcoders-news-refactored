import * as types from './types';
import request from 'superagent';

import { ROOT } from '../../config';

export function fetchArticles () {
  return (dispatch) => {
    request
      .get(`${ROOT}/articles`)
      .end((err, res) => {
        if (err) dispatch(fetchArticlesError(err));
        else dispatch(fetchArticlesSuccess(res.body.articles));
      });
  };
}

export function fetchArticlesSuccess(data) {
  return { type: types.FETCH_ARTICLES_SUCCESS, data }
}

export function fetchArticlesError(err) {
  return { type: types.FETCH_ARTICLES_ERROR, error: err }
}

export function fetchTopics () {
  return (dispatch) => {
    request
      .get(`${ROOT}/topics`)
      .end((err, res) => {
        if (err) dispatch(fetchTopicsError(err));
        else dispatch(fetchTopicsSuccess(res.body.topics));
      });
  };
}

export function fetchTopicsError(err) {
  return { type: types.FETCH_TOPICS_ERROR, error: err }
}

export function fetchTopicsSuccess(data) {
  return { type: types.FETCH_TOPICS_SUCCESS, data }
}

export function fetchArticle (id) {
  return (dispatch) => {
    request
      .get(`${ROOT}/articles/${id}`)
      .end((err, res) => {
        if (err) dispatch(fetchArticleError(err));
        else dispatch(fetchArticleSuccess(res.body));
      });
  };
}

export function fetchArticleError(err) {
  return { type: types.FETCH_ARTICLE_ERROR, err }
}

export function fetchArticleSuccess(data) {
  return { type: types.FETCH_ARTICLE_SUCCESS, data }
}

export function fetchComments (id) {
  return (dispatch) => {
    request
      .get(`${ROOT}/articles/${id}/comments`)
      .end((err, res) => {
        if (err) dispatch(fetchCommentsError(err));
        else dispatch(fetchCommentsSuccess(res.body.comments));
      });
  };
}

export function fetchCommentsError(err) {
  return { type: types.FETCH_COMMENTS_ERROR, err }
}

export function fetchCommentsSuccess(data) {
  return { type: types.FETCH_COMMENTS_SUCCESS, data}
}

export function postCommentSuccess (comment) {
  return {
    type: types.POST_COMMENT_SUCCESS,
    comment
  };
}

export function postCommentError(error) {
  return {
    type: types.POST_COMMENT_ERROR,
    error
  };
}

export function deleteCommentSuccess (commentId) {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    commentId
  };
}

export function deleteCommentError (error) {
  return {
    type: types.DELETE_COMMENT_ERROR,
    error
  };
}

export function fetchUser (username) {
  return (dispatch) => {
    request
      .get(`${ROOT}/users/${username}`)
      .end((err, res) => {
        if (err) dispatch(fetchUserError(err));
        else dispatch(fetchUserSuccess(res.body.users[0]));
      });
  };
}

export function fetchUserError(err) {
  return { type: types.FETCH_USER_ERROR, err }
}

export function fetchUserSuccess(data) {
  return { type: types.FETCH_USER_SUCCESS, data}
}