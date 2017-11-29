import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postBookAction, inputBookWriterChangedAction, inputBookTitleChangedAction } from '../../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class FormAddNewBook extends Component {

  render() {
    return (
      <center>
        <Card className="FormAddNewBook">
          <CardTitle title="Add new book:"> </CardTitle>
            <CardText>
              <TextField
                id="book-author-input"
                value={this.props.author}
                onChange={this.props.onAuthorChange}
                placeholder="Author "
                name="Author"
              >
              </TextField>
              <br/>
              <TextField
                id="book-title-input"
                value={this.props.title}
                onChange={this.props.onTitleChange}
                placeholder="Title "
                name="Title"
              >
              </TextField>
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

function mapStateToProps(state) {
  return {
    author: state.form.book.author,
    title: state.form.book.title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAuthorChange(event) {
      dispatch(inputBookWriterChangedAction(event.target.value))
    },
    onTitleChange(event) {
      dispatch(inputBookTitleChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postBookAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddNewBook);
