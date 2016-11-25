import React from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function CommentContainer (props) {
  return (
    <div className='box'>
      <h3 className='title is-3'>Comments</h3>
      <CommentForm articleId={props.articleId} postCommentSuccess={props.postCommentSuccess}/>
      {
        props.comments
          .sort(function (a,b) {
            return b.created_at - a.created_at;
          })
          .map((comment, i) => {
            return <CommentCard key={i} comment={comment} deleteCommentSuccess={props.deleteCommentSuccess}/>;
          })
      }
    </div>
  );
}

export default CommentContainer;
