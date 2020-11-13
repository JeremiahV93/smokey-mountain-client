import React from 'react';
import articleData from '../../../data/articleData';

class SingleArtCard extends React.Component {
  deleteArticle = (e) => {
    e.preventDefault();
    const { art } = this.props;
    console.error(art.id);
    articleData.deleteArticle(art.id)
      .then(() => {
        this.props.history.push('/articles');
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { art } = this.props;
    return (
        <div className='card single-art row justify-content-center'>
            <h2 className='card-title'>{art.title} </h2>
            <h2 className='card-name'>{art.name} </h2>
            <h3 className='cart-category'>{art.category}</h3>
            <button className='btn btn-success'>Read Article</button>
            <button className='btn btn-warning' onClick={this.deleteArticle}>Delete Category</button>
        </div>
    );
  }
}

export default SingleArtCard;
