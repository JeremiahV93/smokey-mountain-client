import React from 'react';
// import { Link } from 'react-router-dom';
import articleData from '../../../data/articleData';
import './SingleArtCard.scss';

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
        <div className='card single-art row justify-content-center' id="articleCard">
            <h2 className='card-title text-center'>{article.title} </h2>
            <h3 className='card-name text-center'>By: {article.user.display_name} </h3>
            <h4 className='cart-category'>{article.category}</h4>
          <div className="card-footer text-center">
            <button className='btn btn-primary' onClick={this.articleDetails}>Article Details</button>
            <button className='btn btn-warning' onClick={this.deleteArticle}>Delete Article</button>
          </div>
        </div>
    );
  }
}

export default SingleArtCard;
