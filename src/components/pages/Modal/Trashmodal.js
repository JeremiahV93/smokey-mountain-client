import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Trashmodal extends React.Component {
  render() {
    const { handleModalShowHide, closeModal } = this.props;
    return (
            <div>
                <Modal.Header closeButton onClick={() => handleModalShowHide()}>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this tag?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModalShowHide()}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Ok
                    </Button>
                </Modal.Footer>
            </div>
    );
  }
}

export default Trashmodal;
