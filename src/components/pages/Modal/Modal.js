import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';

class BootstrapModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    const { deleteTag } = this.props;
    return (
            <div>
                <Button onClick={() => this.handleModalShowHide()}>
                    <DeleteIcon></DeleteIcon>
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this tag?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteTag, this.handleModalShowHide()}>
                        Yes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
    );
  }
}

export default BootstrapModal;
