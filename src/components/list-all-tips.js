import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListBooks from './list-books';
import ListBlogposts from './list-blogposts';
import ListVideos from './list-videos';

import Paper from 'material-ui/Paper';

class ListAllTips extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >

          <h1>Books</h1>
          <ListBooks />

          <h1>Blogs</h1>
          <ListBlogposts />

          <h1>Videos</h1>
          <ListVideos />

        </Paper>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.list.books,
    blogposts: state.list.blogposts,
    videos: state.list.videos,
  };
}

export default connect(mapStateToProps, null)(ListAllTips);
