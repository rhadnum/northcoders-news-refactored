import React from 'react';
import request from 'superagent';
import {ROOT} from '../../config';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      commentBody: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      commentBody : event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    request
      .post(`${ROOT}/articles/${this.props.articleId}/comments`)
      .send({"comment" : `${this.state.commentBody}`})
      .end(function (error, res) {
        console.log(error);
        console.log(res);
      })
  }
  render(){
    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="Create a comment!" className="textarea" value={this.state.commentBody} onChange={this.handleChange}></textarea>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default CommentForm;
