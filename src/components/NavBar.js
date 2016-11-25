import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const NavBar = React.createClass({
  componentWillMount: function () {
    this.props.fetchTopics();
  },
  render: function () {
    return (
      <div>
        <Link to="/">Home</Link>
        { this.props.topics && this.props.topics.map(function (topic, i) {
          return <Link to={`/${topic.slug}`} key={i}>{topic.title}</Link>
        })}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    topics: state.topics
  }
};

function mapDispatchToProps(dispatch) {
  return {
    fetchTopics: function () {
      dispatch(actions.fetchTopics());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
