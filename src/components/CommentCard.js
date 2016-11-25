import React from 'react';
import request from 'superagent';
import {ROOT} from '../../config';

class CommentCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasVoted : 0
    }
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }
  voteUp(){
    if(this.state.hasVoted !== 0) return;
    this.setState({
      hasVoted: 1
    });

    request
      .put(`${ROOT}/comments/${this.props.comment._id}?vote=up`)
      .end()
  }
  voteDown(){
    if(this.state.hasVoted !== 0) return;
    this.setState({
      hasVoted: -1
    })
    request
      .put(`${ROOT}/comments/${this.props.comment._id}?vote=down`)
      .end()
  }
  render () {
    return (
      <div className='box comment-card'>
        {this.props.comment.created_by === 'northcoder' && <span className="icon del-commment-icon"><i className="fa fa-times"></i></span>}
        <p className='comment-body'>{this.props.comment.body}</p>
        <p className='comment-subtext'>
          Posted <span>{this.formatDate()}</span> by <a href='#'>{this.props.comment.created_by}</a>
        </p>
        <p>
          <span>Votes: {this.props.comment.votes + this.state.hasVoted}</span>
          <span className={`icon ${this.state.hasVoted === 1 ? 'vote-up' : ''}`} onClick={this.voteUp}><i className="fa fa-thumbs-up"></i></span>
          <span className={`icon ${this.state.hasVoted === -1 ? 'vote-down' : ''}`} onClick={this.voteDown}><i className="fa fa-thumbs-down"></i></span>
        </p>

      </div>
    );
  }
  formatDate () {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(this.props.comment.created_at);
    let hoursAgo = Math.round((Date.now() - date) / 36e5);

    if (hoursAgo <= 24) {
      return `${hoursAgo} hour${hoursAgo > 2 ? 's' : ''} ago`;
    } else {
      let year = date.getFullYear() < Date.now().getFullYear ? ` ${date.getFullYear()}` : '';
      return `${date.getDate()} ${months[date.getMonth()]}${year}`;
    }
  }
}

export default CommentCard;
