import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Delete';

class Editmodal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  closeModal = (e) => {
    const { deleteTag } = this.props;
    this.handleModalShowHide();
    deleteTag(e);
  }

  render() {
    return (
            <div>
                <SettingsIcon onClick={() => this.handleModalShowHide()}>
                </SettingsIcon>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Edit this tag?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={this.closeModal}>
                        Ok
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
    );
  }
}

export default Editmodal;
