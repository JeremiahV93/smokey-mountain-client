import React from 'react';

import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';
import SingleTag from './SingleTag';
import tagData from '../../../data/tagData';

class Tags extends React.Component {
  state = {
    tags: [],
    isOpen: false,
    title: '',
    tagId: null,
  }

  componentDidMount() {
    tagData.getAllTags()
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.error(err));
  }

  tagUpdate = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  submitTag = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const tag = { title };
    const jsonTag = JSON.stringify(tag);

    tagData.submitTag(jsonTag)
      .then(() => {
        this.props.history.push('./home');
      })
      .catch((err) => console.error(err));
  }

  updateTag = (title) => {
    this.setState({
      title, isOpen: true, updating: true,
    });
  }

  render() {
    const { tags, isOpen } = this.state;
    const { history } = this.props;
    const buildTags = tags.map((tag) => <SingleTag tag={tag} updateTag={this.updateTag} history={history} key={tag.id} />);

    const toggle = () => this.setState({ isOpen: !isOpen });

    return (
      <div className='tags container'>
        <div className='row'>
          <h1> Tag Management</h1>
        </div>
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Tag</Button>
              <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <form>
                    <div className="form-group">
                      <label htmlFor="tagName">Tag Name:</label>
                      <input type="tagName" onChange={this.tagUpdate} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <button onClick={this.updateTag} className="btn btn-primary">Submit</button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
        </div>
          { buildTags }
      </div>
    );
  }
}

export default Tags;
