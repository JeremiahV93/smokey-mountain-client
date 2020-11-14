import React from 'react';

import tagData from '../../../data/tagData';

class SingleTag extends React.Component {
  deleteTag = (e) => {
    e.preventDefault();
    const { tag } = this.props;
    console.error(tag.id);
    tagData.deleteTag(tag.id)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { cat } = this.props;
    return (
      <div className='card single-tag row justify-content-center'>
        <h2 className='card-title'>{tag.title}</h2>
        <button className='btn btn-danger' onClick={this.update}> Update </button>
        <button className='btn btn-warning' onClick={this.deleteCategory}>Delete Category</button>
      </div>
    );
  }
}

export default SingleTag;
