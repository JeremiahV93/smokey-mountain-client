import React from 'react';

import SingleCat from './SingleCat';
import categoryData from '../../../data/categoryData';

class Catergories extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    categoryData.getAllCats()
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { categories } = this.state;
    const { history } = this.props;
    const buildCats = categories.map((cat) => <SingleCat cat={cat} history={history} key={cat.id} />);

    return (
        <div>
          { buildCats }
          categories
        </div>
    );
  }
}

export default Catergories;
