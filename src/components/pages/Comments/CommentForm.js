import React from 'react';
import moment from 'moment';

class CommentForm extends React.Component {
  

  

 

  newComment = (e) => {
    e.preventDefault();
    const { comment, userId, postId } = this.state;
    const {
      addComment, updateComment, updating, commentId,
    } = this.props;
    const creationDate = Date.now();
    const publicationDate = moment(creationDate).format('YYYY-MM-DD');

    const newCommentObj = {
      rareuser: userId,
      comment,
      post: postId,
      date: publicationDate,
    };

    if (updating) {
      updateComment(commentId, newCommentObj);
      this.setState({ comment: '' });
    } else {
      addComment(newCommentObj);
      this.setState({ comment: '' });
    }
  }

  render() {
    const { comment } = this.state;
    return (
        <div>
            <form>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea className="form-control" id="comment" rows="3" onChange={this.commentChange} value={comment}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.newComment}>Add Comment</button>
            </form>
        </div>
    );
  }
}

export default CommentForm;
