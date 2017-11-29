import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookForm from './Forms/BookForm';
import BlogpostForm from './Forms/BlogpostForm';
import VideoForm from './Forms/VideoForm';

import ListAllTips from './SearchResults/';
import ListBooks from './SearchResults/ListBooks';
import ListBlogposts from './SearchResults/ListBlogposts';
import ListVideos from './SearchResults/ListVideos';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import InfoBar from './InfoBar'
import './index.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#ff6f00',
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider className="app" muiTheme={muiTheme}>
      <div>
        <AppBar
          title="Remember me"
          className="app-bar"
        />
        <InfoBar message={this.props.message} />
        <Tabs>
          <Tab
            label="All reading tips">
               <ListAllTips />
         </Tab>

           <Tab
             id="add-new-book-button"
             label="Add new book">
                <BookForm />
                <ListBooks />
          </Tab>

          <Tab
            label="Add new blogpost">
               <BlogpostForm />
               <ListBlogposts />
         </Tab>

         <Tab
           label="Add new video">
              <VideoForm />
              <ListVideos />
        </Tab>

        </Tabs>
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.form.message,
  };
}

export default connect(mapStateToProps, null)(App);
