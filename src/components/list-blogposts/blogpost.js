import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../tip-edit-buttons/delete-button';
import EditButton from '../tip-edit-buttons/edit-button';
import DoneToggle from '../tip-edit-buttons/done-toggle';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';

import Type from '../type-icon';
import selectorNormalizer from '../../utils/selector-normalizer';

export default class Blogpost extends Component {

  render() {
    const CSSId = selectorNormalizer(this.props.blogpost.title, this.props.blogpost.author);
    if (this.props.blogpost.edit) {
      return (
        <center>
          <Card id={CSSId}>
            <SmallInput
              id="blogpost-title-edit-input"
              value={this.props.blogpost.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.blogpost.id)}
              name="Title"
            />
            <br />
            <SmallInput
              id="blogpost-author-edit-input"
              value={this.props.blogpost.author}
              onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.blogpost.id)}
              name="Author"
            />
            <br />
            <SmallInput
              id="blogpost-url-edit-input"
              value={this.props.blogpost.url}
              onChange={(e) => this.props.onUrlChange(e.target.value, this.props.blogpost.id)}
              name="Link"
            />
            <LargeInput
              id="blogpost-comment-edit-input"
              value={this.props.blogpost.comment}
              onChange={(e) => this.props.onCommentChange(e.target.value, this.props.blogpost.id)}
              name="Comment"
            />
            <CardText>
              <EditButton id={this.props.blogpost.id} onEdit={this.props.onEdit} edit={this.props.blogpost.edit} onFinishEditing={this.props.onFinishEditing} />
            </CardText>
          </Card>
        </center>
      );
    }
    return (
      <center>
        <Card className="blogpost" id={CSSId}>
          <CardTitle title={this.props.blogpost.title} subtitle={this.props.blogpost.author}>
            <Type type={this.props.blogpost.type}/>
          </CardTitle>
          <CardText>
            <a href={this.props.blogpost.url}>{this.props.blogpost.url}</a>
          </CardText>
            {this.props.blogpost.comment.trim().length > 0 && <CardText>{this.props.blogpost.comment}</CardText>}
          <CardText>
            <DoneToggle parentId={CSSId} id={this.props.blogpost.id} onDone={this.props.onDone} done={this.props.blogpost.done}/>
            <DeleteButton parentId={CSSId} id={this.props.blogpost.id} onDelete={this.props.onDelete} />
            <EditButton parentId={CSSId} id={this.props.blogpost.id} onEdit={this.props.onEdit} edit={this.props.blogpost.edit} onFinishEditing={this.props.onFinishEditing} />
          </CardText>
        </Card>
      </center>
    );
  }
}
