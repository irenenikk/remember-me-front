import React, { Component } from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from '../tip-edit-buttons/delete-button';
import EditButton from '../tip-edit-buttons/edit-button';
import DoneToggle from '../tip-edit-buttons/done-toggle';

import LargeInput from '../inputs/large-input';
import SmallInput from '../inputs/small-input';

import Type from '../type-icon';
import selectorNormalizer from '../../utils/selector-normalizer';

export default class Book extends Component {

  render() {
    const CSSId = selectorNormalizer(this.props.title, this.props.author);
    if (this.props.edit) {
      return (
        <center>
          <Card id={CSSId}>
            <SmallInput
              id="book-title-input"
              value={this.props.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.id)}
              name="Title"
            />
            <br />
            <SmallInput
              id="book-author-input"
              value={this.props.author}
              onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.id)}
              name="Author"
            />
            <br />
            <LargeInput
              id="book-description-input"
              value={this.props.description}
              onChange={(e) => this.props.onDescriptionChange(e.target.value, this.props.id)}
              name="Description"
            />
            <br />
            <LargeInput
              id="book-comment-input"
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
        <Card className="book" id={CSSId}>
          <CardTitle title={this.props.title} subtitle={this.props.author}>
            <Type
              type={this.props.type}
            />
          </CardTitle>
          {this.props.description.trim().length > 0 && <CardText>{this.props.description}</CardText>}
          {this.props.comment.trim().length > 0 && <CardText>{this.props.comment}</CardText>}
          <CardText>
            <DoneToggle parentId={CSSId} id={this.props.id} onDone={this.props.onDone} done={this.props.done}/>
            <DeleteButton parentId={CSSId} id={this.props.id} onDelete={this.props.onDelete} />
            <EditButton id={this.props.id} onEdit={this.props.onEdit} edit={this.props.edit} onFinishEditing={this.props.onFinishEditing} />
          </CardText>
        </Card>
      </center>
    );
  }
}
