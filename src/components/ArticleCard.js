import React from 'react';
import {Link} from 'react-router';
import formatDate from '../utils/formatDate';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.article.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/article/${props.article._id}`}>
              <h3 className='title is-3'>{props.article.title}</h3>
            </Link>
            <p className='comment-subtext'>
              Posted by <a href='#'>{props.article.created_by}</a> in <Link to={`${props.article.belongs_to}`}>{props.article.belongs_to}</Link>
            </p>
            <p className="comment-subtext">{props.article.comments} comments</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
