import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postBlogpostAction, inputBlogpostTitleChangedAction,
  inputBlogpostAuthorChangedAction, inputBlogpostUrlChangedAction,
  inputBlogpostCommentChangedAction
} from '../../../../state/actions/form-actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';


class BlogpostForm extends Component {

  render() {
    return (
      <center>
        <Card className="BlogForm">
          <CardTitle title="Add new blogpost:"> </CardTitle>
          <CardText>
            <TextField
              value={this.props.title}
              onChange={this.props.onTitleChange}
              floatingLabelText="Title"
              name="Title"
            />
            <br />
            <TextField
              value={this.props.author}
              onChange={this.props.onAuthorChange}
              floatingLabelText="Author"
              name="Author"
            />
            <br />
            <TextField
              value={this.props.url}
              onChange={this.props.onUrlChange}
              floatingLabelText="Link"
              name="Link"
            />
            <br />
            <TextField
              id="blogpost-comment-input"
              value={this.props.comment}
              onChange={this.props.onCommentChange}
              floatingLabelText="Comment"
              name="Comment"
              multiLine
              fullWidth
              rows={3}
            />
          </CardText>
          <CardActions>
            <RaisedButton
              label="Save"
              onClick={this.props.handleClick}
              primary={true}
              type="submit"
            >
            </RaisedButton>
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
