import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChangedAction } from '../../state/actions';

class Form extends Component {

  render() {
    return (
      <input
        value={this.props.inputValue}
        onChange={this.props.onChange}
      >
      </input>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.form.inputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {
      dispatch(inputChangedAction(event.target.value))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
