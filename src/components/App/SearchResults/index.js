import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListBooks from './ListBooks';
import ListBlogposts from './ListBlogposts';
import ListVideos from './ListVideos';

import Paper from 'material-ui/Paper';

class ListAllTips extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >

          <h1>Kirjat</h1>
          <ListBooks />

          <h1>Blogit</h1>
          <ListBlogposts />

          <h1>Videot</h1>
          <ListVideos />

        </Paper>
      </center>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.list.books,
    blogposts: state.list.blogposts,
    videos: state.list.videos,
  };
}

export default connect(mapStateToProps, null)(ListAllTips);
