import React from 'react';
// import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import articleData from '../../../data/articleData';

class SingleArtCard extends React.Component {
  deleteArticle = (e) => {
    e.preventDefault();
    const { article } = this.props;
    console.error(article.id);
    articleData.deleteArticle(article.id)
      .then(() => {
        this.props.getData();
      })
      .catch((err) => console.error(err));
  }

  articleDetails = (e) => {
    e.preventDefault();
    const { article } = this.props;
    console.error(article.id);
    this.props.history.push(`/articles/${article.id}`);
  }

  render() {
    const { article } = this.props;
    return (
      <Card className="root" variant="outlined">
        <CardContent>
            <Typography variant="h5" componenet="h2">
              {article.title}
            </Typography>
            <Typography variant="body2" component="p">
            Category: {article.category.label}
            </Typography>

            <Button variant="contained" onClick={this.articleDetails}>Article Details</Button>
            <IconButton size="small" onClick={this.deleteArticle}><DeleteIcon /></IconButton>
        </CardContent>
      </Card>
    );
  }
}

export default SingleArtCard;
