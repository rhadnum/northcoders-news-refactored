import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      commentBody: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      commentBody : event.target.value
    })
  }
  render(){
    return (
      <div className='box'>
        <form>
          <textarea placeholder="Create a comment!" className="textarea" value={this.state.commentBody} onChange={this.handleChange}></textarea>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default CommentForm;
