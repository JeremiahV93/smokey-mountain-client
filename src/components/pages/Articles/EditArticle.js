import React from 'react';
import moment from 'moment';
import articleData from '../../../data/articleData';
import categoryData from '../../../data/categoryData';

class EditArticle extends React.Component {
    state = {
      categoryId: '',
      title: '',
      content: '',
      imageUrl: '',
      artData: {},
      cats: [],
    }

    componentDidMount() {
      articleData.getSingleArticlebyId(this.props.match.params.articleId)
        .then((res) => {
          this.setState({ artData: res.data, categoryId: res.data.category.id });
        })
        .catch((err) => console.error(err));
      categoryData.getAllCats()
        .then((res) => this.setState({ cats: res.data }))
        .catch((err) => console.error(err));
    }

    changeCategoryEvent = (e) => {
      e.preventDefault();
      this.setState({ categoryId: e.target.value });
    }

    changeTitleEvent = (e) => {
      e.preventDefault();
      this.setState({ title: e.target.value });
    }

    changeContentEvent = (e) => {
      e.preventDefault();
      this.setState({ content: e.target.value });
    }

    URLEvent = (e) => {
      e.preventDefault();
      this.setState({ imageUrl: e.target.value });
    }

    // trying to make an event that handles all changes
    // handleControlledInputChange = (event) => {
    //   const { id } = event.target;
    //   const { value } = event.target;
    //   this.setState({ id: value });
    // }

    editThisArticle = (e) => {
      e.preventDefault();
      const {
        categoryId, content, title, imageUrl,
      } = this.state;
      const userId = localStorage.getItem('user_id');
      const creationDate = Date.now();
      const publicationDate = moment(creationDate).format('YYYY-MM-DD');

      const editedArticle = {
        user_id: userId,
        categoryId,
        content,
        publication_date: publicationDate,
        image_url: imageUrl,
        title,
        approved: true,

      };
      const jsonArticle = JSON.stringify(editedArticle);
      const { articleId } = this.props.match.params;
      articleData.updateArticle(articleId, jsonArticle)
        .then(() => {
          this.props.history.push(`/articles/${articleId}`);
        })
        .catch((err) => console.error('edit article broke', err));
    };

    render() {
      const { artData, cats, categoryId } = this.state;
      return (
        <div className="form-wrapper">
          <h1 className="text-center mt-3">Create New Article</h1>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" className="form-control" id="title" value={artData.title} onChange={this.changeTitleEvent} />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl"> Image Url: </label>
                <input type="text" className="form-control" id="imageUrl" value={artData.image_url} onChange={this.URLEvent} />
              </div>
              <div className="form-group">
                <label htmlFor="categoryId">Category</label>
                  <select className="form-control" id="categoryId" value={categoryId} onChange={this.changeCategoryEvent}>
                    <option>Please select a category</option>
                    {cats.map((cat) => <option key={cat.id} value={cat.id}>  {cat.label}</option>)}
                  </ select>
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" rows="3" value={artData.content} onChange={this.changeContentEvent}/>
              </div>
              <button className="btn btn-light" onClick={this.editThisArticle}>Update</button>
            </form>
        </div>
      );
    }
}

export default EditArticle;
