import React from 'react';
import {
  Collapse, Button,
} from 'reactstrap';
import commentData from '../../../data/commentData';
import SingleComment from './SingleComment';
import CommentForm from './CommentForm';

class Comments extends React.Component {
  state = {
    comments: [],
    postId: this.props.computedMatch.params.articleId,
    isOpen: false,

  }

  componentDidMount() {
    this.getCommentData();
  }

  getCommentData = () => {
    commentData.commentsByPostId(this.props.match.params.articleId)
      .then((res) => this.setState({ comments: res.data }))
      .catch((err) => console.error(err));
  }

  addComment = (newCommentObj) => {
    commentData.addComment(newCommentObj)
      .then(() => {
        this.getCommentData();
        this.setState({ isOpen: false });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { comments, postId, isOpen } = this.state;
    const toggle = () => this.setState({ isOpen: !isOpen });
    return (
      <div>
        <h1>This is the comments page.</h1>
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Tag</Button>
              <Collapse isOpen={isOpen}>
              <CommentForm postId={postId} addComment={this.addComment} />
            </Collapse>
        </div>

        { comments.map((comment) => <SingleComment comment={comment} postId={this.props.match.params.articleId} key={comment.id} ></SingleComment>)}
      </div>
    );
  }
}

export default Comments;
