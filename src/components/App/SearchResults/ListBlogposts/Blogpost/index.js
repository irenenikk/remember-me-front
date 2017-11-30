import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import DeleteButton from '../../DeleteButton';
import EditButton from '../../EditButton';
import TextField from 'material-ui/TextField';

<<<<<<< HEAD
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
                floatingLabelText	="Title"
                name="Title"
              />
              <br/>
              <TextField
                id="blogpost-author-input"
                value={this.props.author}
                onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.id)}
                floatingLabelText	="Author"
                name="Author"
              />
              <br/>
              <TextField
                id="blogpost-url-input"
                value={this.props.url}
                onChange={(e) => this.props.onUrlChange(e.target.value, this.props.id)}
                floatingLabelText	="Link"
                name="Link"
              />
              <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
          </Card>
        </center>
      );
    }
    return (
      <Card>
        <div className="pilar">
        <CardTitle title={this.props.title} subtitle={this.props.author}/>
        <a href={this.props.url}>{this.props.url}</a>
        </div>
          <CardText>
          <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
          <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
        </CardText>
      </Card>
    );
  }
=======
export default ({ title, author, url, id, onDelete }) => {
  return (
    <Card>
      <div className="pilar">
      <CardTitle title={title} subtitle={author} />
      <a href={url}>{url}</a>
      </div>
        <CardText>
        <DeleteButton id={id} onDelete={onDelete} />
      </CardText>
    </Card>
  );
>>>>>>> e82842f1d2b5e712bc0f107e0677f6abab8840d4
}
