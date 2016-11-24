import React from 'react';
import CommentCard from './CommentCard';

function CommentContainer (props) {
  return (
    <div className='box'>
      <h3 className='title is-3'>Comments</h3>
      {
        props.comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })
      }
    </div>
  );
}

export default CommentContainer;
