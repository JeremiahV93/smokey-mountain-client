import React from 'react';

import {
  Collapse, Button, CardBody, Card,
} from 'reactstrap';
import SingleCat from './SingleCat';
import categoryData from '../../../data/categoryData';

class Catergories extends React.Component {
  state = {
    categories: [],
    isOpen: false,
    setIsOpen: false,
    title: '',
  }

  componentDidMount() {
    categoryData.getAllCats()
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.error(err));
  }

  categoryUpdate = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  submitCategory = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const cat = { title };
    const jsonCat = JSON.stringify(cat);
    categoryData.addCategory(jsonCat)
      .then((res) => console.error(res))
      .catch((err) => console.error(err));
  }

  render() {
    const { categories, isOpen } = this.state;
    const { history } = this.props;
    const buildCats = categories.map((cat) => <SingleCat cat={cat} history={history} key={cat.id} />);

    const toggle = () => this.setState({ isOpen: !isOpen });

    return (
      <div className='categories container'>
          <div className='row'>
            <h1>Categories</h1>
          </div>
          <div>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Add Category</Button>
              <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <form>
                    <div className="form-group">
                      <label htmlFor="categoryName">Category Name:</label>
                      <input type="categoryName" onChange={this.categoryUpdate} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <button onClick={this.submitCategory} className="btn btn-primary">Submit</button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
            { buildCats }
      </div>
    );
  }
}

export default Catergories;
