import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../tip-edit-buttons/delete-button';
import EditButton from '../tip-edit-buttons/edit-button';
import DoneToggle from '../tip-edit-buttons/done-toggle';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';

import EmbeddedVideo from './embedded-video';

import Type from '../type-icon';
import selectorNormalizer from '../../utils/selector-normalizer';

export default class Video extends Component {

  render() {
    const CSSId = selectorNormalizer(this.props.video.title, this.props.video.url);
    if (this.props.video.edit) {
      return (
        <center>
          <Card id={CSSId}>
            <SmallInput
              id="video-title-edit-input"
              value={this.props.video.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.video.id)}
              name="Title"
            />
            <br />
            <SmallInput
              id="video-url-edit-input"
              value={this.props.video.url}
              onChange={(e) => this.props.onUrlChange(e.target.value, this.props.video.id)}
              name="Link"
            />
            <br />
            <LargeInput
              id="video-comment-edit-input"
              value={this.props.video.comment}
              onChange={(e) => this.props.onCommentChange(e.target.value, this.props.video.id)}
              name="Comment"
            />
            <CardText>
              <EditButton id={this.props.video.id} onEdit={this.props.onEdit} edit={this.props.video.edit} onFinishEditing={this.props.onFinishEditing} />
            </CardText>
          </Card>
        </center>
      );
    }
    return (
      <center>
        <Card className="video" id={CSSId}>
          <CardTitle title={this.props.video.title} subtitle={this.props.video.author}>
            <Type
              type={this.props.video.type}
            />
          </CardTitle>
          <EmbeddedVideo url={this.props.video.url}/>
            {this.props.video.comment.trim().length > 0 && <CardText>{this.props.video.comment}</CardText>}
          <CardText>
            <DoneToggle parentId={CSSId} id={this.props.video.id} onDone={this.props.onDone} done={this.props.video.done}/>
            <DeleteButton parentId={CSSId} id={this.props.video.id} onDelete={this.props.onDelete} />
            <EditButton parentId={CSSId} id={this.props.video.id} onEdit={this.props.onEdit} edit={this.props.video.edit} onFinishEditing={this.props.onFinishEditing}/>
          </CardText>
        </Card>
      </center>
    );
  }
}
