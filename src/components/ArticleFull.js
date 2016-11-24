import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class ArticleFull extends React.Component {
  componentDidMount () {
    this.props.fetchArticle();
  }
  render () {
    return (
      <div className='box'>
        <h3 className='title is-3'>Article</h3>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {

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
