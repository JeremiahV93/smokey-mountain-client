import React from 'react';

class SingleArtCard extends React.Component {
  render() {
    const { article } = this.props;
    return (
        <div className='card'>
            <h1>{article.title} </h1>
            <h2>{article.name} </h2>
            <h3>{article.category}</h3>
            <button className='btn btn-success'>Read Article</button>
        </div>
    );
  }
}

export default SingleArtCard;
