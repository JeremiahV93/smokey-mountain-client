import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className="container post-buttons">
            <Link to={'/newarticle'}><i className="fas fa-plus-square"></i> New Article</Link>
          </div>
             { buildArticles }
             Articles
          </div>
      );
    }
}

export default Articles;
