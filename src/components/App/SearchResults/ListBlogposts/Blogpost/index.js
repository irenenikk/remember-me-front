import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../../DeleteButton';
import EditButton from '../../EditButton';
import TextField from 'material-ui/TextField';

export default class Blogpost extends Component {

  render() {
    if (this.props.edit) {
      return (
        <center>
          <Card>
            <TextField
              id="blogpost-title-input"
              value={this.props.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.id)}
              floatingLabelText="Title"
              name="Title"
            />
            <br />
            <TextField
              id="blogpost-author-input"
              value={this.props.author}
              onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.id)}
              floatingLabelText="Author"
              name="Author"
            />
            <br />
            <TextField
              id="blogpost-url-input"
              value={this.props.url}
              onChange={(e) => this.props.onUrlChange(e.target.value, this.props.id)}
              floatingLabelText="Link"
              name="Link"
            />
            <TextField
              id="blogpost-comment-input"
              value={this.props.comment}
              onChange={(e) => this.props.onCommentChange(e.target.value, this.props.id)}
              floatingLabelText="Comment"
              name="Comment"
              multiLine
              fullWidth
              rows={3}
            />
            <CardText>
              <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing} />
            </CardText>
          </Card>
        </center>
      );
    }
    return (
      <center>
        <Card className="blogpost">
            <CardTitle title={this.props.title} subtitle={this.props.author} />
            <CardText><a href={this.props.url}>{this.props.url}</a></CardText>
            {this.props.comment.trim().length > 0 && <CardText>{this.props.comment}</CardText>}
          <CardText>
            <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
            <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing} />
          </CardText>
        </Card>
      </center>
    );
  }
}
