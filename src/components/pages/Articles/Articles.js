import React from 'react';
import articleData from '../../../data/articleData';
import SingleArticle from './SingleArtCard';

class Articles extends React.Component {
    state = {
      articles: [],
    }

    componentDidMount() {
      articleData.getAllArticles()
        .then((res) => this.setState({ articles: res.data }))
        .catch((err) => console.error(err));
    }

    render() {
      const { articles } = this.state;
      const buildArticles = articles.map((art) => <SingleArticle article={art} key={art.id} />);
      return (
            <div>
             { buildArticles }
             Articles
            </div>
      );
    }
}

export default Articles;
