import React from 'react';
import { Modal } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Trashmodal from './Trashmodal';

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

  closeModal = (e) => {
    const { deleteTag } = this.props;
    this.handleModalShowHide();
    deleteTag(e);
  }

  render() {
    return (
            <div>
                <DeleteIcon onClick={() => this.handleModalShowHide()}>
                </DeleteIcon>

                <Modal show={this.state.showHide}>
                  <Trashmodal handleModalShowHide={this.handleModalShowHide} closeModal={this.closeModal}/>
                </Modal>

            </div>
    );
  }
}

export default BootstrapModal;
