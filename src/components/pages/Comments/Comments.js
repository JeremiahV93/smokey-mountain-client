import React from 'react';
import commentData from '../../../data/commentData';
import SingleComment from './SingleComment';

class Comments extends React.Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    commentData.commentsByPostId(this.props.match.params.articleId)
      .then((res) => this.setState({ comments: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h1>This is the comments page.</h1>
        { comments.map((comment) => <SingleComment comment={comment} ></SingleComment>)}
      </div>
    );
  }
}

export default Comments;
