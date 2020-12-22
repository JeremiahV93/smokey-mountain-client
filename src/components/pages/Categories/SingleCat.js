import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import './singleCat.scss';

class SingleCat extends React.Component {
  deleteCat = (e) => {
    e.preventDefault();
    const { deleteCategory } = this.props;
    deleteCategory(this.props.cat.id);
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
        <div className='card single-cat'>
            <TableRow className='button-group'>
            <TableCell onClick={this.update}><SettingsIcon></SettingsIcon> </TableCell>
            <TableCell onClick={this.deleteCat}><DeleteIcon></DeleteIcon></TableCell>
            <TableCell className='card-label'>{cat.label}</TableCell>
          </TableRow>
        </div>
    );
  }
}

export default SingleCat;
