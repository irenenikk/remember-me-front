import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postBlogpostAction, inputBlogpostTitleChangedAction,
  inputBlogpostAuthorChangedAction, inputBlogpostUrlChangedAction,
  inputBlogpostCommentChangedAction
} from '../../state/actions/form-actions';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';
import SaveButton from '../tip-edit-buttons/save-button';

class BlogpostForm extends Component {

  render() {
    return (
      <center>
        <Card className="BlogForm">
          <CardTitle title="Add new blogpost:"> </CardTitle>
          <CardText>
            <SmallInput
              id="blogpost-title-input"
              value={this.props.title}
              onChange={this.props.onTitleChange}
              name="Title"
            />
            <br />
            <SmallInput
              id="blogpost-author-input"
              value={this.props.author}
              onChange={this.props.onAuthorChange}
              name="Author"
            />
            <br />
            <SmallInput
              id="blogpost-link-input"
              value={this.props.url}
              onChange={this.props.onUrlChange}
              name="Link"
            />
            <br />
            <LargeInput
              id="blogpost-comment-input"
              value={this.props.comment}
              onChange={this.props.onCommentChange}
              name="Comment"
            />
          </CardText>
          <CardActions>
            <SaveButton
              id="submit-blogpost"
              onClick={this.props.handleClick}
            />
          </CardActions>
        </Card>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.form.blogpost.title,
    author: state.form.blogpost.author,
    url: state.form.blogpost.url,
    comment: state.form.blogpost.comment,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange(event) {
      dispatch(inputBlogpostTitleChangedAction(event.target.value))
    },
    onAuthorChange(event) {
      dispatch(inputBlogpostAuthorChangedAction(event.target.value))
    },
    onUrlChange(event) {
      dispatch(inputBlogpostUrlChangedAction(event.target.value))
    },
    onCommentChange(event) {
      dispatch(inputBlogpostCommentChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postBlogpostAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogpostForm);
