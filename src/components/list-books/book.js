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
    const CSSId = selectorNormalizer(this.props.book.title, this.props.book.author);
    if (this.props.book.edit) {
      return (
        <center>
          <Card id={CSSId}>
            <SmallInput
              id="book-title-edit-input"
              value={this.props.book.title}
              onChange={(e) => this.props.onTitleChange(e.target.value, this.props.book.id)}
              name="Title"
            />
            <br />
            <SmallInput
              id="book-author-edit-input"
              value={this.props.book.author}
              onChange={(e) => this.props.onAuthorChange(e.target.value, this.props.book.id)}
              name="Author"
            />
            <br />
            <LargeInput
              id="book-description-edit-input"
              value={this.props.book.description}
              onChange={(e) => this.props.onDescriptionChange(e.target.value, this.props.book.id)}
              name="Description"
            />
            <br />
            <LargeInput
              id="book-comment-edit-input"
              value={this.props.book.comment}
              onChange={(e) => this.props.onCommentChange(e.target.value, this.props.book.id)}
              name="Comment"
            />
            <CardText>
              <EditButton id={this.props.book.id} onEdit={this.props.onEdit} edit={this.props.book.edit} onFinishEditing={this.props.onFinishEditing} />
            </CardText>
          </Card>
        </center>
      );
    }
    return (
      <center>
        <Card className="book" id={CSSId}>
          <CardTitle title={this.props.book.title} subtitle={this.props.book.author}>
            <Type
              type={this.props.book.type}
            />
          </CardTitle>
          {this.props.book.description.trim().length > 0 && <CardText>{this.props.book.description}</CardText>}
          {this.props.book.comment.trim().length > 0 && <CardText>{this.props.book.comment}</CardText>}
          <CardText>
            <DoneToggle parentId={CSSId} id={this.props.book.id} onDone={this.props.onDone} done={this.props.book.done}/>
            <DeleteButton parentId={CSSId} id={this.props.book.id} onDelete={this.props.onDelete} />
            <EditButton parentId={CSSId} id={this.props.book.id} onEdit={this.props.onEdit} edit={this.props.book.edit} onFinishEditing={this.props.onFinishEditing} />
          </CardText>
        </Card>
      </center>
    );
  }
}
