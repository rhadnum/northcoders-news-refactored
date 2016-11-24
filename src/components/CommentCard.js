import React from 'react';

function CommentCard (props) {
  return (
    <div className='box'> {props.comment.body} </div>
  );
}

export default CommentCard;
