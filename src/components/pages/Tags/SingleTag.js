/* eslint-disable no-undef */
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Modal from '../Modal/Modal';

import './SingleTag.scss';

import tagData from '../../../data/tagData';

class SingleTag extends React.Component {
  state = {
    isOPen: false,
  }

  deleteTag = (e) => {
    e.preventDefault();
    const { tag, getTagData } = this.props;
    console.error(tag.id);
    tagData.deleteTag(tag.id)
      .then(() => {
        getTagData();
      })
      .catch((err) => console.error(err));
  }

  update = () => {
    const { tag } = this.props;
    this.props.updateThisTag(tag.label, tag.id);
  }

  link = (e) => {
    e.preventDefault();
    const { tag } = this.props;
    this.props.history.push(`/articles/${tag.id}`);
  }

  tagUpdate = (e) => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  }

  render() {
    const { tag } = this.props;
    return (
      <div className='card single-tag'>
        <TableRow className='button-group'>
          <TableCell><Modal tag={tag} deleteTag={this.deleteTag}/></TableCell>
          <TableCell onClick={this.update}><SettingsIcon></SettingsIcon></TableCell>
          <TableCell className='card-label'>{tag.label}</TableCell>
        </TableRow>
      </div>
    );
  }
}

export default SingleTag;
