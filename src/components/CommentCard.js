import React from 'react';

class CommentCard extends React.Component {
  render () {
    return (
      <div className='box'>
        <p className='comment-body'>{this.props.comment.body}</p>
        <p className='comment-subtext'>
          Posted <span>{this.formatDate()}</span> by <a href='#'>{this.props.comment.created_by}</a>
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
