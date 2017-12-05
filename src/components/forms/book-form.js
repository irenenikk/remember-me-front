import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postBookAction,
  inputBookWriterChangedAction,
  inputBookTitleChangedAction,
  inputBookDescriptionChangedAction,
  inputBookCommentChangedAction,
} from '../../state/actions/form-actions';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';
import SaveButton from '../tip-edit-buttons/save-button';

class BookForm extends Component {

  render() {
    return (
      <center>
        <Card className="BookForm">
          <CardTitle title="Add new book:"> </CardTitle>
          <CardText>
            <SmallInput
              id="book-title-input"
              value={this.props.title}
              onChange={this.props.onTitleChange}
              name="Title"
            />
            <br />
            <SmallInput
              id="book-author-input"
              value={this.props.author}
              onChange={this.props.onAuthorChange}
              name="Author"
            />
            <br />
            <LargeInput
              id="book-description-input"
              value={this.props.description}
              onChange={this.props.onDescriptionChange}
              name="Description"
            />
            <br />
            <LargeInput
              id="book-comment-input"
              value={this.props.comment}
              onChange={this.props.onCommentChange}
              name="Comment"
            />
          </CardText>
          <CardActions>
            <SaveButton
              id="submit-book"
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
