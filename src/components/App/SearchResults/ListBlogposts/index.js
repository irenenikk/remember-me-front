import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blogpost from '../Blogpost';
import Paper from 'material-ui/Paper';

class ListBlogposts extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.blogposts.map(b =>
            <Blogpost
              key={b.id}
              title={b.title}
              url={b.url}
              description={b.description}
              tags={b.tags}
            />
          )}
        </Paper>
      </center>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogposts: state.list.blogposts,
  };
}

export default connect(mapStateToProps, null)(ListBlogposts);
