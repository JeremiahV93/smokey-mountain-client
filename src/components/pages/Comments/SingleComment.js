import React from 'react';

class SingleComment extends React.Component {
  render() {
    const { comment } = this.props;

    const destroyComment = (e) => {
      e.preventDefault();
      const { deleteComment } = this.props;
      deleteComment(comment.id);
    };

    return (
      <div className='card'>
          <h2>{comment.rareuser.user.username}</h2>
          <p>{comment.date}</p>
          <h4>{comment.comment}</h4>
          <button className='btn-danger' onClick={destroyComment}>Delete Comment</button>
      </div>
    );
  }
}

export default SingleComment;
