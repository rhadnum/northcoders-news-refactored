import React from 'react';
import {Link} from 'react-router';
import request from 'superagent';
import {ROOT} from '../../config';

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasVoted: 0
    };
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }
  voteUp () {
    if (this.state.hasVoted !== 0) return;
    this.setState({
      hasVoted: 1
    });
    request
      .put(`${ROOT}/articles/${this.props.article._id}?vote=up`)
      .end(function (err, res) {
        console.log(err)
        console.log(res)
      });
  }

  voteDown () {
    if (this.state.hasVoted !== 0) return;
    this.setState({
      hasVoted: -1
    });
    request
      .put(`${ROOT}/articles/${this.props.article._id}?vote=down`)
      .end();
  }
  render() {
    return (
      <div className="art-card">
        <article className='media article-card'>
          <div className='media-left'>
            <p onClick={this.voteUp} className={this.state.hasVoted === 1 && 'vote-up'}>
              <i className="fa fa-angle-up fa-3x"></i>
            </p>
            <p>Upvotes:</p>
            <p>{this.props.article.votes + this.state.hasVoted}</p>
            <p onClick={this.voteDown} className={this.state.hasVoted === -1 && 'vote-down'}>
              <i className="fa fa-angle-down fa-3x"></i>
            </p>
          </div>
          <div className='media-content'>
            <div className='content'>
              <Link to={`/article/${this.props.article._id}`}>
                <h3 className='title is-3'>{this.props.article.title}</h3>
              </Link>
              <p className='comment-subtext'>
                Posted by <Link to={`/users/${this.props.article.created_by}`}>{this.props.article.created_by}</Link> in <Link
                to={`${this.props.article.belongs_to}`}>{this.props.article.belongs_to}</Link>
              </p>
              <p className='comment-subtext'>{this.props.article.comments} comments</p>
            </div>
          </div>
        </article>
      </div>
    );
  };
}

export default ArticleCard;
