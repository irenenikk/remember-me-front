import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postBlogpostAction, inputBlogpostTitleChangedAction, 
  inputBlogpostAuthorChangedAction, inputBlogpostUrlChangedAction } from '../../../../state/actions';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';


class BlogForm extends Component {

  render() {
    return (
      <center>
        <Card className="BlogForm">
          <CardTitle title="Add new blogpost:"> </CardTitle>
            <CardText>
              <TextField
                value={this.props.title}
                onChange={this.props.onTitleChange}
                placeholder="Title "
                name="Title"
              >
              </TextField>
              <br/>
              <TextField
                value={this.props.author}
                onChange={this.props.onAuthorChange}
                placeholder="Author "
                name="Author"
              >
              </TextField>
              <br/>
              <TextField
                value={this.props.url}
                onChange={this.props.onUrlChange}
                placeholder="Link "
                name="www.site.com"
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

function mapStateToProps(state) {
  return {
    title: state.form.blog.title,
    author: state.form.blog.author,
    url: state.form.blog.url,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTitleChange(event) {
      dispatch(inputBlogpostTitleChangedAction(event.target.value))
    },
    onAuthorChange(event) {
      dispatch(inputBlogpostAuthorChangedAction(event.target.value))
    },
    onUrlChange(event) {
      dispatch(inputBlogpostUrlChangedAction(event.target.value))
    },
    handleClick() {
      dispatch(postBlogpostAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);
