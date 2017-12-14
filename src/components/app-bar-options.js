import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterButtons from './filter-buttons';
import SearchInput from './search-input';

import { changeSearchStringAction } from '../state/actions/list-actions';

class AppBarOptions extends Component {

  render() {
    return (
      <div className="app-bar-options">
        <SearchInput value={this.props.searchString} onChange={this.props.handleSearchStringChange}/>
        <FilterButtons />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchString: state.list.searchString,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchStringChange(event) {
      dispatch(changeSearchStringAction(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarOptions);
