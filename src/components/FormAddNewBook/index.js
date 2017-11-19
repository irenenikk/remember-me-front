import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickAction, inputBookWriterChangedAction, inputBookTitleChangedAction } from '../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class FormAddNewBook extends Component {

  render() {
    return (
      <Card className="FormAddNewBook">
        <CardTitle title="Lisää uusi kirja:"> </CardTitle>

        <CardText>

        <TextField
          value={this.props.inputBookWriterValue}
          onChange={this.props.inputBookWriterValueHandleOnChange}
          floatingLabelText="Kirjailijan nimi "
        >
        </TextField>

        <br/>

        <TextField
          value={this.props.inputBookTitleValue}
          onChange={this.props.inputBookTitleValueHandleOnChange}
          floatingLabelText="Kirjan nimi "
        >
        </TextField>

        </CardText>

        <CardActions>


        <RaisedButton
          label="Tallenna lukulistalle"
          onClick={this.props.handleClick}
          primary={true}  >
        </RaisedButton>


        </CardActions>


      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputBookWriterValue: state.inputBookWriterValue,
    inputBookTitleValue: state.inputBookTitleValue,

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
      dispatch(clickAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddNewBook);
