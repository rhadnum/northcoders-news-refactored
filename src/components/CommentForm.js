import React from 'react';
import request from 'superagent';
import {ROOT} from '../../config';

class CommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentBody: '',
      isSubmitting: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      commentBody: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.state.isSubmitting || this.state.commentBody === '') return;
    this.setState({
      isSubmitting: true
    });
    request
      .post(`${ROOT}/articles/${this.props.articleId}/comments`)
      .send({'comment': `${this.state.commentBody}`})
      .end((error, res) => {
        if (error) {
          console.log(error);
        } else {
          this.props.postCommentSuccess(res.body.comment);
        }
        this.setState({
          isSubmitting: false,
          commentBody: ''
        });
      });
  }

  render () {
    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit} >
          <textarea
            placeholder='Create a comment!'
            className='textarea'
            value={this.state.commentBody}
            onChange={this.handleChange}>
          </textarea>
          <button className='button' type='submit'>{this.state.isSubmitting ? 'Submitting' : 'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
