import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postVideoAction, inputVideoTitleChangedAction, inputVideoUrlChangedAction } from '../../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


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
              >
              </TextField>
              <br/>
              <TextField
                value={this.props.url}
                onChange={this.props.onUrlChange}
                floatingLabelText="Link "
                name="www.video.com"
              >
              </TextField>
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
    handleClick() {
      dispatch(postVideoAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
