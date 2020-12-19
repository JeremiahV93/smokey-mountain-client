import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';
import SingleCat from './SingleCat';
import categoryData from '../../../data/categoryData';

class Catergories extends React.Component {
  state = {
    categories: [],
    isOpen: false,
    label: '',
    catId: null,
    updating: false,
  }

 getCatData = () => {
   categoryData.getAllCats()
     .then((res) => this.setState({ categories: res.data }))
     .catch((err) => console.error(err));
 }

 componentDidMount() {
   this.getCatData();
 }

  categoryUpdate = (e) => {
    e.preventDefault();
    this.setState({ label: e.target.value });
  }

  submitCategory = (e) => {
    e.preventDefault();
    const { label, updating, catId } = this.state;
    const cat = { label };
    const jsonCat = JSON.stringify(cat);

    if (updating) {
      categoryData.updateCategory(jsonCat, catId)
        .then(() => {
          this.setState({ isOpen: false, label: '' });
          this.getCatData();
        })
        .catch((err) => console.error(err));
    } else {
      categoryData.addCategory(jsonCat)
        .then(() => {
          this.setState({ isOpen: false, label: '' });
          this.getCatData();
        })
        .catch((err) => console.error(err));
    }
  }

  updateCat = (label, catId) => {
    this.setState({
      label, catId, isOpen: true, updating: true,
    });
  }

  deleteCategory = (id) => {
    categoryData.deleteCat(id)
      .then(() => { this.getCatData(); })
      .catch((err) => console.error(err));
  }

  render() {
    const { categories, isOpen, label } = this.state;
    const { history } = this.props;
    const buildCats = categories.map((cat) => <SingleCat cat={cat} updateCat={this.updateCat} deleteCategory={this.deleteCategory} history={history} key={cat.id} />);

    const toggle = () => this.setState({ isOpen: !isOpen });

    return (
      <Table>
          <TableHead>
            <h1>Categories</h1>
          </TableHead>
          <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Category</Button>
              <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <form>
                    <div className="form-group">
                      <label htmlFor="categoryName">Category Name:</label>
                      <input type="categoryName" onChange={this.categoryUpdate} className="form-control" aria-describedby="emailHelp" value={label} />
                    </div>
                    <button onClick={this.submitCategory} className="btn btn-primary">Submit</button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
            { buildCats }
      </Table>
    );
  }
}

export default Catergories;
