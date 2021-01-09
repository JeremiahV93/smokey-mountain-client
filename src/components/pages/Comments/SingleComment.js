import React from 'react';

class Comments extends React.Component {
  render() {
    const { comment } = this.props;

    return (
      <h1>{comment.comment}</h1>
    );
  }
}

export default Comments;
