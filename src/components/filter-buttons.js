import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import {filterReadAction, filterShowAllAction, filterUnreadAction} from '../state/actions/list-actions';

class FilterButtons extends Component {
  render() {
    return (
      <div>
        <FlatButton
          label="Show all"
          onClick={this.props.handleShowAll}
          backgroundColor={this.props.showAll? "#ffa86b" : ""}
        />
        <FlatButton
          label="Show done"
          onClick={this.props.handleShowRead}
          backgroundColor={this.props.showRead? "#ffa86b" : ""}
        />
        <FlatButton
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
    showAll: state.list.showAll,
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
