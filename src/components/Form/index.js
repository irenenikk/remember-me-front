import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickAction, inputBookWriterChangedAction, inputBookTitleChangedAction } from '../../state/actions';

class Form extends Component {

  render() {
    return (
      <form className="Form">
        <h2> Kirjoittaja: </h2>
        <input
          type="text"
          value={this.props.inputBookWriterValue}
          onChange={this.props.inputBookWriterValueHandleOnChange}
        >
        </input>

        <h2>  Nimi: </h2>
        <input
          type="text"
          value={this.props.inputBookTitleValue}
          onChange={this.props.inputBookTitleValueHandleOnChange}
        >
        </input>

        <br/> <br/>

        <input
          type="submit"
          value="Tallenna lukulistalle"
          onClick={this.props.handleClick}>
        </input>

      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputBookWriterValue: state.form.inputBookWriterValue,
    inputBookTitleValue: state.form.inputBookTitleValue,

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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
