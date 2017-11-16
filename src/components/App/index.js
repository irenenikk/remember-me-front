import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickAction } from '../../state/actions';
import Form from '../Form';
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        Hello Remember me!
        <div>
          <button
            onClick={this.props.handleClick}>
            Just testing heroku deploy
          </button>
        </div>
        <Form />
        <div>{"Value: " + this.props.value}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.form.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick() {
      dispatch(clickAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
