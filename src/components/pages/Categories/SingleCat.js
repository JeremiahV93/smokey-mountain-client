import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CDModal from '../CDModal/CDModal';
import CEModal from '../CEModal/CEModal';

import './singleCat.scss';

import categoryData from '../../../data/categoryData';

class SingleCat extends React.Component {
  state = {
    isOpen: false,
  }

  deleteCat = (e) => {
    e.preventDefault();
    const { cat, getCatData } = this.props;
    console.error(cat.id);
    categoryData.deleteCat(cat.id)
      .then(() => {
        getCatData();
      })
      .catch((err) => console.error(err));
  }

  link = (e) => {
    e.preventDefault();
    const { cat } = this.props;
    this.props.history.push(`/articles/${cat.id}`);
  }

  render() {
    const { cat } = this.props;
    return (
        <div className='card single-cat'>
            <TableRow className='button-group'>
            <TableCell><CEModal cat={cat} update={this.update}/></TableCell>
            <TableCell><CDModal cat={cat} deleteCat={this.deleteCat}/></TableCell>
            <TableCell className='card-label'>{cat.label}</TableCell>
          </TableRow>
        </div>
    );
  }
}

export default SingleCat;
