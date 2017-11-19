import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { clickAction } from '../../state/actions';
import FormAddNewBook from '../FormAddNewBook';
import SearchResults from '../SearchResults/List';

import './index.css';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';


class App extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Remember me! - Lukulista"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Tabs>
           <Tab
             icon={<FontIcon className="material-icons">home</FontIcon>}
             label="Lisää kirja">
                <FormAddNewBook />
          </Tab>
           <Tab
             icon={<FontIcon className="material-icons">favorite</FontIcon>}
             label="Suosikit"
           />
         </Tabs>
         <SearchResults />
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
