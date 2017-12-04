import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postBookAction,
  inputBookWriterChangedAction,
  inputBookTitleChangedAction,
  inputBookDescriptionChangedAction,
  inputBookCommentChangedAction,
} from '../../../../state/actions/form-actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';


class BookForm extends Component {

  render() {
    return (
      <center>
        <Card className="BookForm">
          <CardTitle title="Add new book:"> </CardTitle>
          <CardText>
            <TextField
              id="book-title-input"
              value={this.props.title}
              onChange={this.props.onTitleChange}
              floatingLabelText="Title "
              name="Title"
            />
            <br />
            <TextField
              id="book-author-input"
              value={this.props.author}
              onChange={this.props.onAuthorChange}
              floatingLabelText="Author "
              name="Author"
            />
            <br />
            <TextField
              id="book-description-input"
              value={this.props.description}
              onChange={this.props.onDescriptionChange}
              floatingLabelText="Description"
              name="Description"
              multiLine
              fullWidth
              rows={3}
            />
            <br />
            <TextField
              id="book-comment-input"
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
              id="submit-book"
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
    author: state.form.book.author,
    title: state.form.book.title,
    description: state.form.book.description,
    comment: state.form.book.comment,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthorChange(event) {
      dispatch(inputBookWriterChangedAction(event.target.value))
    },
    onTitleChange(event) {
      dispatch(inputBookTitleChangedAction(event.target.value))
    },
    onDescriptionChange(event) {
      dispatch(inputBookDescriptionChangedAction(event.target.value))
    },
    onCommentChange(event) {
      dispatch(inputBookCommentChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postBookAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
