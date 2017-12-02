import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../../DeleteButton';
import EditButton from '../../EditButton';
import TextField from 'material-ui/TextField';

export default class Book extends Component {

  render() {
    if (this.props.edit) {
      return (
        <center>
          <Card>
            <TextField
              id="book-title-input"
              value={this.props.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.id)}
              floatingLabelText="Title"
              name="Title"
            />
            <br />
            <TextField
              id="book-author-input"
              value={this.props.author}
              onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.id)}
              floatingLabelText="Author "
              name="Author"
            />
            <br />
            <TextField
              id="book-description-input"
              value={this.props.description}
              onChange={(e) => this.props.onDescriptionChange(e.target.value, this.props.id)}
              floatingLabelText="Description"
              name="Description"
              multiLine
              fullWidth
              rows={3}
            />
            <br />
            <TextField
              id="book-comment-input"
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
        <Card>
          <CardTitle className="book" title={this.props.title} subtitle={this.props.author} />
          {this.props.description.trim().length > 0 && <CardText>{this.props.description}</CardText>}
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
