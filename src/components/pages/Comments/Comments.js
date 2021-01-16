import React from 'react';
import {
  Collapse, Button,
} from 'reactstrap';
import moment from 'moment';
import commentData from '../../../data/commentData';
import SingleComment from './SingleComment';

class Comments extends React.Component {
  state = {
    comments: [],
    postId: this.props.computedMatch.params.articleId,
    isOpen: false,
    comment: '',
    userId: localStorage.getItem('user_id'),

  }

  componentDidMount() {
    this.getCommentData();
  }

  getCommentData = () => {
    commentData.commentsByPostId(this.props.match.params.articleId)
      .then((res) => this.setState({ comments: res.data }))
      .catch((err) => console.error(err));
  }

  addComment = () => {
    const { comment, userId, postId } = this.state;
    const creationDate = Date.now();
    const publicationDate = moment(creationDate).format('YYYY-MM-DD');

    const newCommentObj = {
      rareuser: userId,
      comment,
      post: postId,
      date: publicationDate,
    };

    commentData.addComment(newCommentObj)
      .then(() => {
        this.getCommentData();
        this.setState({ isOpen: false, comment: '' });
      })
      .catch((err) => console.error(err));
  }

  deleteComment = (commentId) => {
    commentData.deleteComment(commentId)
      .then(() => {
        this.getCommentData();
      })
      .catch((err) => console.error(err));
  }

  updateComment = () => {
    const { commentId } = this.state;

    const { comment, userId, postId } = this.state;
    const creationDate = Date.now();
    const publicationDate = moment(creationDate).format('YYYY-MM-DD');

    const commentObj = {
      rareuser: userId,
      comment,
      post: postId,
      date: publicationDate,
    };

    commentData.updateComment(commentId, commentObj)
      .then(() => {
        this.getCommentData();
        this.setState({ isOpen: false });
      })
      .catch((err) => console.error(err));
  }

  updating = (commentId, comment) => {
    this.setState({
      comment, commentId, isOpen: true, updating: true,
    });
  }

  submitChange = (e) => {
    e.preventDefault();
    const { updating } = this.state;
    if (updating) {
      this.updateComment();
    } else {
      this.addComment();
    }
  }

  commentChange = (e) => {
    e.preventDefault();
    this.setState({ comment: e.target.value });
  }

  render() {
    const {
      comments, isOpen, comment,
    } = this.state;
    const toggle = () => this.setState({ isOpen: !isOpen });
    return (
      <div>
        <h1>This is the comments page.</h1>
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Comment</Button>
              <Collapse isOpen={isOpen}>
              <div>
                  <form>
                  <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea className="form-control" id="comment" rows="3" onChange={this.commentChange} value={comment}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.submitChange}>Add Comment</button>
                  </form>
              </div>
                    </Collapse>
        </div>

        { comments.map((oneComment) => <SingleComment oneComment={oneComment} deleteComment={this.deleteComment}
         updating={this.updating} postId={this.props.match.params.articleId} key={oneComment.id} ></SingleComment>)}
      </div>
    );
  }
}

export default Comments;
