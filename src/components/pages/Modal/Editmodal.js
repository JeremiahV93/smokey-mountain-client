import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import tagData from '../../../data/tagData';

class Editmodal extends React.Component {
  state = {
    tagId: this.props.tag.id,
    showHide: false,
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  closeModal = (e) => {
    const { deleteTag } = this.props;
    this.handleModalShowHide();
    deleteTag(e);
  }

  tagUpdate = (e) => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  }

  submitTag = (e) => {
    e.preventDefault();
    const { label, tagId } = this.state;
    const tag = { label };
    const jsonTag = JSON.stringify(tag);

    tagData.updateTag(tagId, jsonTag)
      .then(() => {
        this.setState({ isOpen: false, label: '' });
        this.getTagData();
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { label } = this.state;
    return (
            <div>
                <SettingsIcon onClick={() => this.handleModalShowHide()}>
                </SettingsIcon>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Edit this tag?
                    <form>
                    <div className="form-group">
                      <label htmlFor="tagName">Tag Name:</label>
                      <input type="tagName" onChange={this.tagUpdate} value={label} className="form-control" aria-describedby="emailHelp" />
                    </div>
                  </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={this.submitTag}>
                        Ok
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
    );
  }
}

export default Editmodal;
