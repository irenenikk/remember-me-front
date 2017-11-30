import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
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
                floatingLabelText	="Title"
                name="Title"
              />
              <br/>
              <TextField
                id="blogpost-url-input"
                value={this.props.url}
                onChange={(e) => this.props.onUrlChange(e.target.value, this.props.id)}
                floatingLabelText	="Link"
                name="Link"
              />
              <CardText>
                <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
              </CardText>
          </Card>
        </center>
      );
    }
    return (
      <Card>
        <div className="pilar">
          <CardTitle title={this.props.title}/>
          <a href={this.props.url}>{this.props.url}</a>
        </div>
          <CardText>
          <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
          <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
        </CardText>
      </Card>
    );
  }
}
