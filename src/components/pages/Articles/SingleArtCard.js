import React from 'react';
import articleData from '../../../data/articleData';

class SingleArtCard extends React.Component {
  deleteArticle = (e) => {
    e.preventDefault();
    const { article } = this.props;
    console.error(article.id);
    articleData.deleteArticle(article.id)
      .then(() => {
        this.props.history.push('/articles');
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { article } = this.props;
    return (
        <div className='card single-art row justify-content-center'>
            <h2 className='card-title'>{article.title} </h2>
            <h2 className='card-name'>{article.user.display_name} </h2>
            <h3 className='cart-category'>{article.category}</h3>
            <button className='btn btn-success'>Read Article</button>
            <button className='btn btn-warning' onClick={this.deleteArticle}>Delete Category</button>
        </div>
    );
  }
}

export default SingleArtCard;
