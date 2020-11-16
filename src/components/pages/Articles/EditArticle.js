import React from 'react';
import articleData from '../../../data/articleData';

class EditArticle extends React.Component {
    state = {
      categoryId: '',
      title: '',
      content: '',
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

      editThisArticle = (e) => {
        e.preventDefault();
        const { categoryId, content, title } = this.state;
        const userId = localStorage.getItem('user_id');
        const creationDate = Date.now();
        const creationDateString = creationDate.toString();

        const editedArticle = {
          user_id: userId,
          category_id: categoryId,
          content,
          date: creationDateString,
          title,
        };
        const jsonArticle = JSON.stringify(editedArticle);
        const { articleId } = this.props.match.params;
        articleData.updateArticle(articleId, jsonArticle)
          .then((res) => {
            this.props.history.push(`/articles/${articleId}`);
          })
          .catch((err) => console.error('edit article broke', err));
      };

      render() {
        return (
        <div className="form-wrapper">
            <h1 className="text-center mt-3">Edit Article</h1>
            <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="title" onChange={this.changeTitleEvent} />
            </div>
            <div className="form-group">
                <label htmlFor="categoryId">Category ID</label>
                <input type="text" className="form-control" id="categoryId" placeholder="categoryId" onChange={this.changeCategoryEvent}/>
            </div>
                <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" rows="3" placeholder="content" onChange={this.changeContentEvent}/>
            </div>
            <button className="btn btn-light" onClick={this.editThisArticle}>Update</button>
            </form>
        </div>);
      }
}

export default EditArticle;
