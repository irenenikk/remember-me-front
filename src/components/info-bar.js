import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { resetMessageAction } from '../state/actions/message-actions';

class InfoBar extends Component {
  render() {
    return (
      <Snackbar
        open={this.props.message !== ""}
        message={this.props.message}
        autoHideDuration={4000}
        onRequestClose={this.props.handelHide}
        bodyStyle={{ height: 'auto', lineHeight: '28px', padding: 24, whiteSpace: 'pre-line' }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.form.message,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handelHide() {
      dispatch(resetMessageAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
