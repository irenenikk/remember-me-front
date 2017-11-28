import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postBookAction, inputBookWriterChangedAction, inputBookTitleChangedAction } from '../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class FormAddNewBook extends Component {

  render() {
    return (
      <center>
        <Card className="FormAddNewBook">
          <CardTitle title="Lisää kirja:"> </CardTitle>
            <CardText>
              <TextField
                id="book-author-input"
                value={this.props.authorInput}
                onChange={this.props.inputBookWriterValueHandleOnChange}
                placeholder="Kirjailijan nimi "
                name="Kirjailijan nimi "
              >
              </TextField>
              <br/>
              <TextField
                id="book-title-input"
                value={this.props.nameInput}
                onChange={this.props.inputBookTitleValueHandleOnChange}
                placeholder="Kirjan nimi "
                name="Kirjan nimi"
              >
              </TextField>
            </CardText>
            <CardActions>
              <RaisedButton
                id="submit-book"
                label="Tallenna lukulistalle"
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
    authorInput: state.bookAuthorInput,
    nameInput: state.bookNameInput,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputBookWriterValueHandleOnChange(event) {
      dispatch(inputBookWriterChangedAction(event.target.value))
    },
    inputBookTitleValueHandleOnChange(event) {
      dispatch(inputBookTitleChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postBookAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddNewBook);
