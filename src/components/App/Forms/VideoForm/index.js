import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postVideoAction,
  inputVideoTitleChangedAction,
  inputVideoUrlChangedAction,
  inputVideoCommentChangedAction
} from '../../../../state/actions/form-actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';


class VideoForm extends Component {

  render() {
    return (
      <center>
        <Card className="VideoForm">
          <CardTitle title="Add new video:"> </CardTitle>
          <CardText>
            <TextField
              value={this.props.title}
              onChange={this.props.onTitleChange}
              floatingLabelText="Title "
              name="Title"
            />
            <br />
            <TextField
              value={this.props.url}
              onChange={this.props.onUrlChange}
              floatingLabelText="Link "
              name="www.video.com"
            />
            <TextField
              id="video-comment-input"
              value={this.props.comment}
              onChange={this.props.onCommentChange}
              floatingLabelText="Comment"
              name="Comment"
              multiLine
              fullWidth
              rows={3}
            />
          </CardText>
          <CardActions>
            <RaisedButton
              label="Save"
              onClick={this.props.handleClick}
              primary={true}
              type="submit"
            >
            </RaisedButton>
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
