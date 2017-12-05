import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postVideoAction,
  inputVideoTitleChangedAction,
  inputVideoUrlChangedAction,
  inputVideoCommentChangedAction
} from '../../state/actions/form-actions';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';
import SaveButton from '../tip-edit-buttons/save-button';

class VideoForm extends Component {

  render() {
    return (
      <center>
        <Card className="VideoForm">
          <CardTitle title="Add new video:"> </CardTitle>
          <CardText>
            <SmallInput
              id="video-title-input"
              value={this.props.title}
              onChange={this.props.onTitleChange}
              name="Title"
            />
            <br />
            <SmallInput
              id="video-link-input"
              value={this.props.url}
              onChange={this.props.onUrlChange}
              name="Link"
            />
            <LargeInput
              id="video-comment-input"
              value={this.props.comment}
              onChange={this.props.onCommentChange}
              name="Comment"
            />
          </CardText>
          <CardActions>
            <SaveButton
              id="submit-video"
              onClick={this.props.handleClick}
            />
          </CardActions>
        </Card>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.form.video.title,
    url: state.form.video.url,
    comment: state.form.video.comment,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange(event) {
      dispatch(inputVideoTitleChangedAction(event.target.value))
    },
    onUrlChange(event) {
      dispatch(inputVideoUrlChangedAction(event.target.value))
    },
    onCommentChange(event) {
      dispatch(inputVideoCommentChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postVideoAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
