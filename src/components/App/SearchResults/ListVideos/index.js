import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import Paper from 'material-ui/Paper';
import {
  updateVideoTitleAction,
  updateVideoUrlAction,
  updateVideoCommentAction,
  editVideoAction,
  updateVideoAction,
} from '../../../../state/actions/edit-actions';
import {
  deleteVideoAction,
  doneVideoAction
} from '../../../../state/actions/list-actions';

class ListVideos extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.videos.filter(b => {
            if (this.props.showRead) {
              return b.read;
            }
            if (this.props.showUnread) {
              return !b.read;
            }
            return true;
          })
          .map(v =>
            <Video
              id={v.id}
              key={v.id}
              title={v.title}
              url={v.url}
              comment={v.comment}
              tags={v.tags}
              edit={v.edit}
              done={v.read}
              onDone={this.props.handleDone}
              onEdit={this.props.handleEdit}
              onDelete={this.props.handleDelete}
              onTitleChange={this.props.handleTitleChange}
              onUrlChange={this.props.handleUrlChange}
              onCommentChange={this.props.handleCommentChange}
              onFinishEditing={this.props.handleFinishEditing}
            />
          )}
        </Paper>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.list.videos,
    showAll: state.list.showAll,
    showRead: state.list.showRead,
    showUnread: state.list.showUnread,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDone(id) {
      dispatch(doneVideoAction(id))
    },
    handleDelete(id) {
      dispatch(deleteVideoAction(id))
    },
    handleEdit(id) {
      dispatch(editVideoAction(id));
    },
    handleTitleChange(input, id) {
      dispatch(updateVideoTitleAction(input, id))
    },
    handleUrlChange(input, id) {
      dispatch(updateVideoUrlAction(input, id))
    },
    handleCommentChange(input, id) {
      dispatch(updateVideoCommentAction(input, id))
    },
    handleFinishEditing(id) {
      dispatch(updateVideoAction(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVideos);
