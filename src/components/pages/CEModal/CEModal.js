import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import categoryData from '../../../data/categoryData';

class CEModal extends React.Component {
  state = {
    catId: this.props.cat.id,
    showHide: false,
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  catUpdate = (e) => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  }

  submitCat = (e) => {
    e.preventDefault();
    const { label, catId } = this.state;
    const cat = { label };
    const jsonCat = JSON.stringify(cat);

    categoryData.updateCategory(jsonCat, catId)
      .then(() => {
        this.setState({ isOpen: false, label: '' });
        categoryData.getAllCats();
      })
      .catch((err) => console.error(err));
    this.handleModalShowHide();
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
            <Modal.Body>Edit Category?
            <form>
            <div className="form-group">
              <label htmlFor="catName">Category Name:</label>
              <input type="catName" onChange={this.catUpdate} value={label} className="form-control" aria-describedby="Help" />
            </div>
          </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                Cancel
            </Button>
            <Button variant="primary" onClick={this.submitCat}>
                Ok
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
  }
}

export default CEModal;
