import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class ArticleFull extends React.Component {
  componentDidMount () {
    this.props.fetchArticle();
  }
  render () {
    const {article} = this.props;
    if (article) {
      return (
        <div className='box'>
          <h3 className='title is-3'>{article.title}</h3>
          <h4 className='subtitle is-6'>
            by <a href='#'>{article.created_by}</a>
            in <a href='#'>{article.belongs_to}</a>
          </h4>
          <p>{article.body}</p>
        </div>
      );
    } else {
      return (
        <div className='box'>Loading...</div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    article: state.currArticle
  };
}

function mapDispatchToProps (dispatch, currProps) {
  return {
    fetchArticle: function () {
      dispatch(actions.fetchArticle(currProps.params.article_id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFull);
