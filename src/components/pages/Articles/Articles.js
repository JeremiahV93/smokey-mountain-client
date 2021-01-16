import React from 'react';
import { Link } from 'react-router-dom';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import articleData from '../../../data/articleData';
import SingleArticle from './SingleArtCard';
import './Articles.scss';

class Articles extends React.Component {
    state = {
      articles: [],
    }

    componentDidMount() {
      this.getData();
    }

    getData = () => {
      if (Object.entries(this.props.match.params).length === 0) {
        articleData.getAllArticles()
          .then((res) => this.setState({ articles: res.data }))
          .catch((err) => console.error(err));
      } else {
        articleData.getArticlesByCategoryId(this.props.match.params.categoryId)
          .then((res) => this.setState({ articles: res.data }))
          .catch((err) => console.error(err));
      }
    }

    render() {
      const { articles } = this.state;
      const { history } = this.props;
      const buildArticles = articles.map((art) => <SingleArticle article={art} getData={this.getData} history={history} key={art.id} />);
      return (
        <div className="post-container">
          <h1 className="text-center">View All Articles</h1>
          <div className="container post-buttons">
            <Link to={'/newarticle'}><LibraryBooksRoundedIcon /> New Article</Link>
          </div>
             { buildArticles }
          </div>
      );
    }
}

export default Articles;
