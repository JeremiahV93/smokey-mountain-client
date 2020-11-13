import React from 'react';
import './singleCat.scss';

import catData from '../../../data/categoryData';

class SingleCat extends React.Component {
  deleteCategory = (e) => {
    e.preventDefault();
    const { cat } = this.props;
    console.error(cat.id);
    catData.deleteCat(cat.id)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { cat } = this.props;
    return (
        <div className='card single-cat row justify-content-center'>
            <h2 className='card-title'>{cat.title}</h2>
            <button className='btn btn-success'> Articles </button>
            <button className='btn btn-warning' onClick={this.deleteCategory}>Delete Category</button>
        </div>
    );
  }
}

export default SingleCat;
