import React from 'react';
import articleData from '../../../data/articleData';

class SingleArticle extends React.Component {
  state = {
    article: {},
    comments: [],
  }

  componentDidMount() {
    articleData.getArticlesByUserId()
      .then((res) => this.setState({ article: res.data }))
      .catch((err) => console.error(err));
  }
}

export default SingleArticle;
