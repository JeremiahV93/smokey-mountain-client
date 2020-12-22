import React from 'react';
import moment from 'moment';
import articleData from '../../../data/articleData';
import categoryData from '../../../data/categoryData';
import tagData from '../../../data/tagData';

class EditArticle extends React.Component {
    state = {
      categoryId: '',
      title: '',
      content: '',
      imageUrl: '',
      artData: {},
      cats: [],
      tags: [],
      postTags: [],
      existingPostTags: [],
    }

    componentDidMount() {
      articleData.getSingleArticlebyId(this.props.match.params.articleId)
        .then((artData) => {
          categoryData.getAllCats()
            .then((allCats) => {
              tagData.getAllTags()
                .then((allTags) => {
                  this.setState({
                    artData: artData.data,
                    categoryId: artData.data.category.id,
                    cats: allCats.data,
                    tags: allTags.data,
                    title: artData.data.title,
                    imageUrl: artData.data.image_url,
                    content: artData.data.content,
                  });

                  artData.data.posttags.forEach((tagObj) => {
                    const { postTags } = this.state;
                    postTags.push(tagObj.tag.id);
                    this.setState({ postTags, existingPostTags: [...postTags] });
                  });
                });
            });
        })
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

    editThisArticle = (e) => {
      e.preventDefault();
      const {
        categoryId, content, title, imageUrl,
      } = this.state;
      const userId = localStorage.getItem('user_id');
      const creationDate = Date.now();
      const publicationDate = moment(creationDate).format('YYYY-MM-DD');

      this.updatePostTags();

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

    updatePostTags = () => {
      const { postTags, existingPostTags } = this.state;

      // Create an arr of postTagobjs w/ post ID, tag ID, and status keep, new, or delete
      const postTagsArr = [];

      // compare new postTags with existingPostTags
      // you will have posttags that should be there, those that are missing, and new ones
      // tags are all tags, postTags are current ones, existingPostTags are initial tags

      const postid = parseInt(this.props.match.params.articleId, 10);

      const keeps = postTags.filter((x) => existingPostTags.includes(x));
      keeps.forEach((id) => {
        const tempObj = { id, postid, status: 'keep' };
        postTagsArr.push(tempObj);
      });

      const remove = existingPostTags.filter((x) => !postTags.includes(x));
      remove.forEach((id) => {
        const tempObj = { id, postid, status: 'delete' };
        postTagsArr.push(tempObj);
      });

      const add = postTags.filter((x) => !existingPostTags.includes(x));
      add.forEach((id) => {
        const tempObj = { id, postid, status: 'create' };
        postTagsArr.push(tempObj);
      });
      articleData.updatePostTags(postTagsArr)
        .then()
        .catch((err) => console.error(err));
    }

    checkChange = (e) => {
      let { postTags } = this.state;
      const value = parseInt(e.target.value, 10);

      if (e.target.checked) {
        postTags.push(value);
        this.setState({ postTags });
      } else {
        postTags = postTags.filter((item) => item !== value);
        this.setState({ postTags });
      }
    }

    render() {
      const {
        artData, cats, categoryId, tags, title, imageUrl, content,
      } = this.state;
      const postTags = artData.posttags;

      return (
        <div className="form-wrapper">
          <h1 className="text-center mt-3">Edit Article</h1>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" className="form-control" id="title" value={title} onChange={this.changeTitleEvent} />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl"> Image Url: </label>
                <input type="text" className="form-control" id="imageUrl" value={imageUrl} onChange={this.URLEvent} />
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
                <textarea className="form-control" id="content" rows="3" value={content} onChange={this.changeContentEvent}/>
              </div>
              {
              tags.map((tag) => {
                if (postTags.some((postTagObj) => tag.id === postTagObj.tag.id)) {
                  return <div>
                  <input type="checkbox" id={tag.id} name={tag.label} value={tag.id} defaultChecked={true} readyonly={false} onChange={this.checkChange} />
                  <label for={tag.label}> {tag.label} </label>
              </div>;
                }

                return <div>
                <input type="checkbox" id={tag.id} name={tag.label} value={tag.id} onChange={this.checkChange} />
                <label for={tag.label}> {tag.label} </label>
            </div>;
              })
              }
              <button className="btn btn-light" onClick={this.editThisArticle}>Update</button>
            </form>
        </div>
      );
    }
}

export default EditArticle;
