import React from 'react';
import moment from 'moment';
import articleData from '../../../data/articleData';
import categoryData from '../../../data/categoryData';
import tagData from '../../../data/tagData';
import './NewArticle.scss';

class NewArticle extends React.Component {
  state = {
    categoryId: '',
    title: '',
    content: '',
    imageUrl: '',
    cats: [],
    tags: [],
    postTags: [],
  }

  componentDidMount() {
    categoryData.getAllCats()
      .then((res) => this.setState({ cats: res.data }))
      .catch((err) => console.error(err));
    tagData.getAllTags()
      .then((res) => this.setState({ tags: res.data }))
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

  createArticle = (e) => {
    e.preventDefault();
    const {
      categoryId, content, title, imageUrl, postTags,
    } = this.state;
    const creationDate = Date.now();
    const publicationDate = moment(creationDate).format('YYYY-MM-DD');
    const newArticle = {
      title,
      categoryId,
      content,
      publication_date: publicationDate,
      approved: true,
      image_url: imageUrl,
      posttags: postTags,
    };
    const jsonArticle = JSON.stringify(newArticle);
    articleData.createArticle(jsonArticle)
      .then((res) => {
        this.props.history.push('/articles');
      })
      .catch((err) => console.error('create article broke', err));
  };

  checkChange = (e) => {
    let { postTags } = this.state;

    if (e.target.checked) {
      postTags.push(e.target.value);
      this.setState({ postTags });
    } else {
      // arr = arr.filter(item => item !== value)

      postTags = postTags.filter((item) => item !== e.target.value);
      this.setState({ postTags });
    }
  }

  render() {
    const { cats, tags } = this.state;

    return (
     <div className="form-wrapper container">
      <h1 className="text-center mt-3">Create New Article</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" className="form-control" id="title" placeholder="title" onChange={this.changeTitleEvent} />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl"> Image Url: </label>
          <input type="text" className="form-control" id="imageUrl" placeholder="imageUrl" onChange={this.URLEvent} />
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">Category ID</label>
          <select className="form-control" id="categoryId" placeholder="categoryId" onChange={this.changeCategoryEvent}>
            <option>Please select a category</option>
            {cats.map((cat) => <option value={cat.id}> {cat.label}</option>)}
          </ select>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" rows="3" placeholder="content" onChange={this.changeContentEvent}/>
        </div>
        <div className="row">
          { tags.map((tag) => <div>
          <input type="checkbox" id={tag.id} name={tag.label} value={tag.id} onChange={this.checkChange} />
          <label for={tag.label}> {tag.label} </label>
        </div>) }
        </div>
      <button className="btn btn-light" onClick={this.createArticle}>Create</button>
    </form>
  </div>

    );
  }
}

export default NewArticle;
