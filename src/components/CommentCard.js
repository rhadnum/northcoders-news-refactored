import React from 'react';
import request from 'superagent';
import {ROOT} from '../../config';
import formatDate from '../utils/formatDate';
import generateHtmlString from '../utils/generateHtmlString';
import {Link} from 'react-router';


class CommentCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasVoted: 0
    };
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  voteUp () {
    if (this.state.hasVoted !== 0) return;
    this.setState({
      hasVoted: 1
    });
    request
      .put(`${ROOT}/comments/${this.props.comment._id}?vote=up`)
      .end();
  }

  voteDown () {
    if (this.state.hasVoted !== 0) return;
    this.setState({
      hasVoted: -1
    });
    request
      .put(`${ROOT}/comments/${this.props.comment._id}?vote=down`)
      .end();
  }

  handleClick () {
    request
      .del(`${ROOT}/comments/${this.props.comment._id}`)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.props.deleteCommentSuccess(this.props.comment._id);
        }
      });
  }

  render () {
    return (
      <div className='comment-card'>

        {this.props.comment.created_by === 'northcoder' &&
          <span className='icon del-commment-icon' onClick={this.handleClick}>
            <i className='fa fa-times'></i>
          </span>
        }

        <p className='comment-body' dangerouslySetInnerHTML={{__html:generateHtmlString(this.props.comment.body)}}></p>

        <p className='comment-subtext'>
          Posted <span>{formatDate(this.props.comment.created_at)}</span> by <Link to={`/users/${this.props.comment.created_by}`}>{this.props.comment.created_by}</Link>
        </p>

        <p className="comment-votes">
          <span>Votes: {this.props.comment.votes + this.state.hasVoted}</span>
          <span className={`icon ${this.state.hasVoted === 1 ? 'vote-up' : ''}`} onClick={this.voteUp}>
            <i className='fa fa-angle-up'></i>
          </span>
          <span className={`icon ${this.state.hasVoted === -1 ? 'vote-down' : ''}`} onClick={this.voteDown}>
            <i className='fa fa-angle-down'></i>
          </span>
        </p>

      </div>
    );
  }
}

export default CommentCard;
