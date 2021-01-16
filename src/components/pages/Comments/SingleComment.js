import React from 'react';

class SingleComment extends React.Component {
  render() {
    const { oneComment, updating } = this.props;

    const destroyComment = (e) => {
      e.preventDefault();
      const { deleteComment } = this.props;
      deleteComment(oneComment.id);
    };

    const updateComment = (e) => {
      e.preventDefault();
      updating(oneComment.id, oneComment.comment);
    };

    return (
      <div className='card'>
          <h2>{oneComment.rareuser.user.username}</h2>
          <p>{oneComment.date}</p>
          <h4>{oneComment.comment}</h4>
          <button className='btn-danger' onClick={destroyComment}>Delete Comment</button>
          <button className='btn-warning' onClick={updateComment}>Update Comment</button>

      </div>
    );
  }
}

export default SingleComment;
