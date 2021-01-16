import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class SingleComment extends React.Component {
  render() {
    const { comment } = this.props;

    const destroyComment = (e) => {
      e.preventDefault();
      const { deleteComment } = this.props;
      deleteComment(comment.id);
    };

    return (
       <Card className="root" variant="outlined" maxWidth>
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
          {comment.rareuser.user.username}
          </Typography>
          <Typography variant="h5" component="h2">
          {comment.comment}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {comment.date}
          </Typography>
          <button className='btn-danger' onClick={destroyComment}>Delete Comment</button>
        </CardContent>
       </Card>
    );
  }
}

export default SingleComment;
