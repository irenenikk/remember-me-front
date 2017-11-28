import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postBlogpostAction, inputBlogpostTitleChangedAction, inputBlogpostUrlChangedAction } from '../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class FormAddNewBlogpost extends Component {

  render() {
    return (
      <center>
        <Card className="FormAddNewBlogpost">
          <CardTitle title="Lisää Blogilinkki:"> </CardTitle>
            <CardText>
              <TextField
                value={this.props.blogpostTitleInput}
                onChange={this.props.inputBlogpostTitleValueHandleOnChange}
                placeholder="Blogilinkin otsikko "
                name="Linkin otsikko"
              >
              </TextField>
              <br/>
              <TextField
                value={this.props.blogpostUrlInput}
                onChange={this.props.inputBlogpostUrlValueHandleOnChange}
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
    blogpostTitleInput: state.blogpostTitleInput,
    blogpostUrlInput: state.blogpostUrlInput,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputBlogpostTitleValueHandleOnChange(event) {
      dispatch(inputBlogpostTitleChangedAction(event.target.value))
    },
    inputBlogpostUrlValueHandleOnChange(event) {
      dispatch(inputBlogpostUrlChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postBlogpostAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddNewBlogpost);
