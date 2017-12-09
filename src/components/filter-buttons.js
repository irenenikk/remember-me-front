import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {filterReadAction, filterShowAllAction, filterUnreadAction} from '../state/actions/list-actions';

class FilterButtons extends Component {
  render() {
    return (
      <div>
        <FlatButton
          id="show-all-button"
          label="Show all"
          onClick={this.props.handleShowAll}
          backgroundColor={!this.props.showUnread && !this.props.showRead? "#ffa86b" : ""}
        />
        <FlatButton
          id="show-done-button"
          label="Show done"
          onClick={this.props.handleShowRead}
          backgroundColor={this.props.showRead? "#ffa86b" : ""}
        />
        <FlatButton
          id="show-undone-button"
          label="Show undone"
          onClick={this.props.handleShowUnread}
          backgroundColor={this.props.showUnread? "#ffa86b" : ""}
        />
      </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    showRead: state.list.showRead,
    showUnread: state.list.showUnread,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowAll() {
      dispatch(filterShowAllAction());
    },
    handleShowRead() {
      dispatch(filterReadAction());
    },
    handleShowUnread() {
      dispatch(filterUnreadAction());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);
