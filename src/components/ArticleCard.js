import React from 'react';
import {Link} from 'react-router';

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
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
