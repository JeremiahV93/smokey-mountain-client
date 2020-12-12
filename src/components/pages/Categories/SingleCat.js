import React from 'react';
import './singleCat.scss';

import catData from '../../../data/categoryData';

class SingleCat extends React.Component {
  deleteCategory = (e) => {
    e.preventDefault();
    const { cat } = this.props;
    catData.deleteCat(cat.id)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => console.error(err));
  }

  update = () => {
    const { cat } = this.props;
    this.props.updateCat(cat.label, cat.id);
  }

  link = (e) => {
    e.preventDefault();
    const { cat } = this.props;
    this.props.history.push(`/articles/${cat.id}`);
  }

  render() {
    const { cat } = this.props;
    return (
        <div className='card single-cat row justify-content-center'>
            <h2 className='card-label'>{cat.label}</h2>
            <button className='btn btn-success' onClick={this.link}> Articles </button>
            <button className='btn btn-danger' onClick={this.update}> Update </button>

            <button className='btn btn-warning' onClick={this.deleteCategory}>Delete Category</button>
        </div>
    );
  }
}

export default SingleCat;
