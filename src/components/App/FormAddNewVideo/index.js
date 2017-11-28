import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postVideoAction, inputVideoTitleChangedAction, inputVideoUrlChangedAction } from '../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class FormAddNewVideo extends Component {

  render() {
    return (
      <center>
        <Card className="FormAddNewVideo">
          <CardTitle title="Lisää videolinkki:"> </CardTitle>
            <CardText>
              <TextField
                value={this.props.videoTitleInput}
                onChange={this.props.inputVideoTitleValueHandleOnChange}
                placeholder="Videon otsikko "
                name="Videon otsikko"
              >
              </TextField>
              <br/>
              <TextField
                value={this.props.videoUrlInput}
                onChange={this.props.inputVideoUrlValueHandleOnChange}
                placeholder="Linkki "
                name="www.malli.fi"
              >
              </TextField>
            </CardText>
            <CardActions>
              <RaisedButton
                label="Tallenna lukulistalle"
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

function mapStateToProps(state) {
  return {
    videoTitleInput: state.videoTitleInput,
    videoUrlInput: state.videoUrlInput,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputVideoTitleValueHandleOnChange(event) {
      dispatch(inputVideoTitleChangedAction(event.target.value))
    },
    inputVideoUrlValueHandleOnChange(event) {
      dispatch(inputVideoUrlChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postVideoAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddNewVideo);
