import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../tip-edit-buttons/delete-button';
import EditButton from '../tip-edit-buttons/edit-button';
import DoneToggle from '../tip-edit-buttons/done-toggle';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';

import EmbeddedVideo from './embedded-video';

import Type from '../type-icon';

export default class Video extends Component {

  render() {
    if (this.props.edit) {
      return (
        <center>
          <Card>
            <SmallInput
              id="video-title-input"
              value={this.props.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.id)}
              name="Author"
            />
            <br />
            <SmallInput
              id="video-url-input"
              value={this.props.url}
              onChange={(e) => this.props.onUrlChange(e.target.value, this.props.id)}
              name="Link"
            />
            <br />
            <LargeInput
              id="video-comment-input"
              value={this.props.comment}
              onChange={(e) => this.props.onCommentChange(e.target.value, this.props.id)}
              name="Comment"
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
        <Card className="video">
          <CardTitle title={this.props.title} subtitle={this.props.author}>
            <Type
              type={this.props.type}
            />
          </CardTitle>
          <EmbeddedVideo url={this.props.url}/>
            {this.props.comment.trim().length > 0 && <CardText>{this.props.comment}</CardText>}
          <CardText>
            <DoneToggle id={this.props.id} onDone={this.props.onDone} done={this.props.done}/>
            <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
            <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing}/>
          </CardText>
        </Card>
      </center>
    );
  }
}

