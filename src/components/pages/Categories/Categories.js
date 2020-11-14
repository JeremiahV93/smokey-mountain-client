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
    title: '',
    catId: null,
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
    const { title, updating, catId } = this.state;
    const cat = { title };
    const jsonCat = JSON.stringify(cat);

    if (updating) {
      categoryData.updateCategory(jsonCat, catId)
        .then(() => {
          this.props.history.push('./home');
        })
        .catch((err) => console.error(err));
    } else {
      categoryData.addCategory(jsonCat)
        .then(() => {
          this.props.history.push('./home');
        })
        .catch((err) => console.error(err));
    }
  }

  updateCat = (title, catId) => {
    this.setState({
      title, catId, isOpen: true, updating: true,
    });
  }

  render() {
    const { categories, isOpen, title } = this.state;
    const { history } = this.props;
    const buildCats = categories.map((cat) => <SingleCat cat={cat} updateCat={this.updateCat} history={history} key={cat.id} />);

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
                      <input type="categoryName" onChange={this.categoryUpdate} className="form-control" aria-describedby="emailHelp" value={title} />
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
