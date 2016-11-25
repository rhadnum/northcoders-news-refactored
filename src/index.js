import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducer/reducer';
import App from './components/App';
import ArticleList from './components/ArticleList';
import ArticleFull from './components/ArticleFull';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ArticleList} />
        <Route path='/article/:article_id' component={ArticleFull} />
        <Route path='/:topicName' component={ArticleList} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);
