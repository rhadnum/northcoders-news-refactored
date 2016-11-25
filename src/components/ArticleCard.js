import React from 'react';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media article-card'>
        <div className='media-left'>
          <p><i className="fa fa-angle-up fa-3x"></i></p>
          <p>Upvotes:</p>
          <p>{props.article.votes}</p>
          <p><i className="fa fa-angle-down fa-3x"></i></p>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/article/${props.article._id}`}>
              <h3 className='title is-3'>{props.article.title}</h3>
            </Link>
            <p className='comment-subtext'>
              Posted by <a href='#'>{props.article.created_by}</a> in <Link to={`${props.article.belongs_to}`}>{props.article.belongs_to}</Link>
            </p>
            <p className='comment-subtext'>{props.article.comments} comments</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
