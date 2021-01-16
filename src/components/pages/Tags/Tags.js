import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

///
import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';
import SingleTag from './SingleTag';
import tagData from '../../../data/tagData';

class Tags extends React.Component {
  state = {
    tags: [],
    isOpen: false,
    label: '',
    tagId: null,
  }

  getTagData = () => {
    tagData.getAllTags()
      .then((res) => this.setState({ tags: res.data }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getTagData();
  }

  submitTag = (e) => {
    e.preventDefault();
    const { label, updating, tagId } = this.state;
    const tag = { label };
    const jsonTag = JSON.stringify(tag);

    if (updating) {
      tagData.updateTag(tagId, jsonTag)
        .then(() => {
          this.setState({ isOpen: false, label: '' });
          this.getTagData();
        })
        .catch((err) => console.error(err));
    } else {
      tagData.createTag(jsonTag)
        .then(() => {
          this.setState({ isOpen: false, label: '' });
          this.getTagData();
        })
        .catch((err) => console.error(err));
    }
  }

  updateThisTag = (label, tagId) => {
    this.setState({
      label, tagId, isOpen: true, updating: true,
    });
  }

  render() {
    const { tags, isOpen, label } = this.state;
    const { history } = this.props;
    const buildTags = tags.map((tag) => <SingleTag tag={tag} getTagData={this.getTagData} updateThisTag={this.updateThisTag} history={history} key={tag.id} />);

    const toggle = () => this.setState({ isOpen: !isOpen });

    return (
      <Table>
        <TableHead>
          <h1> Tag Management</h1>
        </TableHead>
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Tag</Button>
              <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <form>
                    <div className="form-group">
                      <label htmlFor="tagName">Tag Name:</label>
                      <input type="tagName" onChange={this.tagUpdate} value={label} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <button onClick={this.submitTag} className="btn btn-primary">Submit</button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
        </div>
          { buildTags }
      </Table>
    );
  }
}

export default Tags;
