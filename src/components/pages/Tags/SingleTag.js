/* eslint-disable no-undef */
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import { Grid, Button } from '@material-ui/core';

import './SingleTag.scss';

import tagData from '../../../data/tagData';

class SingleTag extends React.Component {
  state = {
    isOPen: false,
  }

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
      <div className='card single-tag row justify-content-center'>
        <Grid container direction="row" alignItems="center">
        <div className='button-group'>
        <Button onClick={this.update}><SettingsIcon></SettingsIcon></Button>
        <Button className='delete-button' onClick={this.deleteTag}><DeleteIcon></DeleteIcon></Button>
        </div>
        <h4>{tag.label}</h4>
        </Grid>
      </div>
    );
  }
}

export default SingleTag;
