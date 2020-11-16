import React from 'react';
import { Link } from 'react-router-dom';
import articleData from '../../../data/articleData';

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
      <div className="singleArticle">
        <h2 className='card-title'>{article.title} </h2>
        <h3 className='card-name'>{article.user.display_name} </h3>
        <h4 className='card-content'>{article.content}</h4>
        <Link to={`/editarticles/${article.id}`}><i className="fas fa-plus-square"></i>Edit Articles</Link>

      </div>
    );
  }
}

export default SingleArticle;
