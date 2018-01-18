import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blogpost from './blogpost';
import Paper from 'material-ui/Paper';
import {
  editBlogpostAction,
  updateBlogpostAction,
  updateBlogpostTitleAction,
  updateBlogpostAuthorAction,
  updateBlogpostUrlAction,
  updateBlogpostCommentAction,
} from '../../state/actions/edit-actions';
import {
  deleteBlogpostAction,
  doneBlogpostAction
} from '../../state/actions/list-actions';

import filterer from '../../utils/tip-filterer';

class ListBlogposts extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.blogposts
            .filter(b => filterer(b, this.props.showRead, this.props.showUnread, this.props.searchString))
            .map(b =>
              <Blogpost
                blogpost={b}
                key={b.id}
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
    showAll: state.list.showAll,
    showRead: state.list.showRead,
    showUnread: state.list.showUnread,
    searchString: state.list.searchString,
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
