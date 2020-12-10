import React from 'react';
import { Link } from 'react-router-dom';
import articleData from '../../../data/articleData';
import './SingleArticle.scss';

class SingleArticle extends React.Component {
  state = {
    article: { user: {} },
    comments: [],
  }

  componentDidMount() {
    articleData.getSingleArticlebyId(this.props.match.params.articleId)
      .then((res) => this.setState({ article: res.data }))
      .catch((err) => console.error(err));
  }

  render() {
    const { article } = this.state;
    return (
      <div className="card row" id="singleArticleCard">
        <h2 className='card-title text-center'id="cardTitle">{article.title} </h2>
        <h3 className='card-name'>display name </h3>
        <h4 className='card-content'>{article.content}</h4>
        <Link className="btn btn-secondary" to={`/editarticles/${article.id}`}><i className="fas fa-plus-square"></i>Edit Articles</Link>
      </div>
    );
  }
}

export default SingleArticle;
