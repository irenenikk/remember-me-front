import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
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
                id="book-author-input"
                value={this.props.author}
                onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.id)}
                placeholder="Title "
                name="Title"
              />
              <br/>
              <TextField
                id="book-author-input"
                value={this.props.title}
                onChange={(e) => this.props.onTitleChange(e.target.value, this.props.id)}
                placeholder="Title"
                name="Title"
              />
              <br/>
              <TextField
                id="book-author-input"
                value={this.props.description}
                onChange={(e) => this.props.onDescriptionChange(e.target.value, this.props.id)}
                placeholder="Description"
                name="Description"
                fullWidth
                multiLine
                rows={3}
              />
              <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
          </Card>
        </center>
      );
    }
    return (
      <Card>
        <CardTitle className="book" title={this.props.title} subtitle={this.props.author} />
          <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
          <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
          <CardText>{this.props.description}</CardText>
      </Card>
    );
  }
}
