import React from 'react';

class SingleComment extends React.Component {
  render() {
    const { comment } = this.props;

    return (
      <div className='card'>
          <h2>{comment.rareuser.user.username}</h2>
          <p>{comment.date}</p>
          <h4>{comment.comment}</h4>
      </div>
    );
  }
}

export default SingleComment;
