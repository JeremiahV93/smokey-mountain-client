import React from 'react';
import commentData from '../../../data/commentData';

class Comments extends React.Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    commentData.commentsByPostId(1)
      .then((res) => this.setState({ comments: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h1>This is the comments page.</h1>
        {}
      </div>
    );
  }
}

export default Comments;
