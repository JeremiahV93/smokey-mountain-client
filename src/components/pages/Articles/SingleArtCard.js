import React from 'react';

class SingleArtCard extends React.Component {
  render() {
    const { art } = this.props;
    return (
        <div className='card'>
            <h1>{art.title} </h1>
            <h2>{art.name} </h2>
            <h3>{art.category}</h3>
            <button className='btn btn-success'>Read Article</button>
        </div>
    );
  }
}

export default SingleArtCard;
