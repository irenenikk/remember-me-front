import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blogpost from './Blogpost';
import Paper from 'material-ui/Paper';
import {
  deleteBlogpostAction,
  editBlogpostAction,
  updateBlogpostAction,
  updateBlogpostTitleAction,
  updateBlogpostAuthorAction,
  updateBlogpostUrlAction,
  updateBlogpostCommentAction,
  doneBlogpostAction
} from '../../../../state/actions';

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
              author={b.author}
              url={b.url}
              comment={b.comment}
              tags={b.tags}
              done={b.read}
              onDone={this.props.handleDone}
              onDelete={this.props.handleDelete}
              onEdit={this.props.handleEdit}
              onFinishEditing={this.props.handleFinishEditing}
              edit={b.edit}
              onTitleChange={this.props.handleTitleChange}
              onAuthorChange={this.props.handleAuthorChange}
              onUrlChange={this.props.handleUrlChange}
              onCommentChange={this.props.handleCommentChange}
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
    handleDone(id) {
      dispatch(doneBlogpostAction(id))
    },
    handleDelete(id) {
      dispatch(deleteBlogpostAction(id))
    },
    handleEdit(id) {
      dispatch(editBlogpostAction(id));
    },
    handleFinishEditing(id) {
      dispatch(updateBlogpostAction(id));
    },
    handleTitleChange(input, id) {
      dispatch(updateBlogpostTitleAction(input, id));
    },
    handleAuthorChange(input, id) {
      dispatch(updateBlogpostAuthorAction(input, id));
    },
    handleCommentChange(input, id) {
      dispatch(updateBlogpostCommentAction(input, id));
    },
    handleUrlChange(input, id) {
      dispatch(updateBlogpostUrlAction(input, id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBlogposts);
