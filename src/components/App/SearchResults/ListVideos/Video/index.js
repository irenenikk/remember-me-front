import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../../DeleteButton';
import EditButton from '../../EditButton';
import TextField from 'material-ui/TextField';

export default class Video extends Component {

  render() {
    if (this.props.edit) {
      return (
        <center>
          <Card>
            <TextField
              id="video-title-input"
              value={this.props.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.id)}
              floatingLabelText="Title"
              name="Author"
            />
            <br />
            <TextField
              id="video-url-input"
              value={this.props.title}
              onChange={(e) => this.props.onUrlChange(e.target.value, this.props.id)}
              floatingLabelText="Link"
              name="Link"
            />
            <br />
            <TextField
              id="video-comment-input"
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
      <Card>
        <div className="pilar">
          <CardTitle title={this.props.title} />
          <a href={this.props.url}>
            {this.props.url}
          </a>
          {this.props.comment.trim().length > 0 && <CardText>{this.props.comment}</CardText>}
        </div>
          <CardText>
          <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
          <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
        </CardText>
      </Card>
    );
  }
}
