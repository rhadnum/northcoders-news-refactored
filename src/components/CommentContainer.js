import React from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function CommentContainer (props) {
  return (
    <div className='box'>
      <h3 className='title is-3'>Comments</h3>
      <CommentForm/>
      {
        props.comments.map((comment, i) => {
          return <CommentCard key={i} comment={comment} />;
        })
      }
    </div>
  );
}

export default CommentContainer;
