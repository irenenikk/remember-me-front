import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { clickAction } from '../../state/actions';
import Form from '../Form';
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> Remember me! - Lukulista </h1>
        <div>

          <Form />

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
