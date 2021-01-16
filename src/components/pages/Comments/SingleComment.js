import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
       <Card className="root" variant="outlined" maxWidth>
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
          {oneComment.rareuser.user.username}
          </Typography>
          <Typography variant="h5" component="h2">
          {oneComment.comment}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {oneComment.date}
          </Typography>
          <button className='btn-danger' onClick={destroyComment}>Delete Comment</button>
          <button className='btn-warning' onClick={updateComment}>Update Comment</button>

        </CardContent>
       </Card>
    );
  }
}

export default SingleComment;
