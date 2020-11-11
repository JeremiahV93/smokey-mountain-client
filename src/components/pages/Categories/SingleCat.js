import React from 'react';

class SingleCat extends React.Component {
  render() {
    const { cat } = this.props;
    return (
        <div className='card'>
            {cat.title}
            <button className='btn btn-success'> Articles </button>
        </div>
    );
  }
}

export default SingleCat;
