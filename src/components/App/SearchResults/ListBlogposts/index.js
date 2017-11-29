import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blogpost from './Blogpost';
import Paper from 'material-ui/Paper';
import { deleteBlogpostAction } from '../../../../state/actions';

class ListBlogposts extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.blogposts.map(b =>
            <Blogpost
              id={b.id}
              key={b.id}
              title={b.title}
              url={b.url}
              description={b.description}
              tags={b.tags}
              onDelete={this.props.handleDelete}
            />
          )}
        </Paper>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogposts: state.list.blogposts,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete(id) {
      dispatch(deleteBlogpostAction(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBlogposts);
