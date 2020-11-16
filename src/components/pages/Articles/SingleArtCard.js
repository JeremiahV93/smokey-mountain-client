import React from 'react';
// import { Link } from 'react-router-dom';
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
        <div className='card single-art row justify-content-center'>
            <h2 className='card-title'>{article.title} </h2>
            <h3 className='card-name'>{article.user.display_name} </h3>
            <h4 className='cart-category'>{article.category}</h4>
            <button onClick={this.articleDetails}>Article Details</button>
            {/* <Link to={`/articles/${article.id}`}><i className="fas fa-plus-square"></i>Article Details</Link> */}
            <button className='btn btn-warning' onClick={this.deleteArticle}>Delete Article</button>
        </div>
    );
  }
}

export default SingleArtCard;
