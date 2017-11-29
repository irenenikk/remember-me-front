import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postBookAction,
  inputBookWriterChangedAction,
  inputBookTitleChangedAction,
  inputBookDescriptionChangedAction,
 } from '../../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class BookForm extends Component {

  render() {
    return (
      <center>
        <Card className="BookForm">
          <CardTitle title="Add new book:"> </CardTitle>
            <CardText>
              <TextField
                id="book-author-input"
                value={this.props.author}
                onChange={this.props.onAuthorChange}
                placeholder="Author "
                name="Author"
              />
              <br/>
              <TextField
                id="book-title-input"
                value={this.props.title}
                onChange={this.props.onTitleChange}
                placeholder="Title "
                name="Title"
              />
              <br/>
              <TextField
                id="book-description-input"
                value={this.props.description}
                onChange={this.props.onDescriptionChange}
                placeholder="Description"
                name="Description"
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
    handleClick() {
      dispatch(postBookAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
