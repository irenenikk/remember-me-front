import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './book';
import Paper from 'material-ui/Paper'
import {
  editBookAction,
  updateBookAction,
  updateBookAuthorAction,
  updateBookTitleAction,
  updateBookDescriptionAction,
  updateBookCommentAction,
 } from '../../state/actions/edit-actions';
 import {
  deleteBookAction,
  doneBookAction
 } from '../../state/actions/list-actions';

 import filterer from '../../utils/tip-filterer';

class ListBooks extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.books
            .filter(b => filterer(b, this.props.showRead, this.props.showUnread))
            .map(b =>
              <Book
                key={b.id}
                id={b.id}
                title={b.title}
                author={b.author}
                description={b.description}
                comment={b.comment}
                tags={b.tags}
                done={b.read}
                type={b.type}
                onDone={this.props.handleDone}
                onDelete={this.props.handleDelete}
                onEdit={this.props.handleEdit}
                onFinishEditing={this.props.handleFinishEditing}
                edit={b.edit}
                onAuthorChange={this.props.handleAuthorChange}
                onTitleChange={this.props.handleTitleChange}
                onDescriptionChange={this.props.handleDescriptionChange}
                onCommentChange={this.props.handleCommentChange}
              />
          )}
        </Paper>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.list.books,
    showAll: state.list.showAll,
    showRead: state.list.showRead,
    showUnread: state.list.showUnread,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDone(id) {
      dispatch(doneBookAction(id))
    },
    handleDelete(id) {
      dispatch(deleteBookAction(id))
    },
    handleEdit(id) {
      dispatch(editBookAction(id));
    },
    handleFinishEditing(id) {
      dispatch(updateBookAction(id));
    },
    handleAuthorChange(input, id) {
      dispatch(updateBookAuthorAction(input, id));
    },
    handleTitleChange(input, id) {
      dispatch(updateBookTitleAction(input, id));
    },
    handleDescriptionChange(input, id) {
      dispatch(updateBookDescriptionAction(input, id));
    },
    handleCommentChange(input, id) {
      dispatch(updateBookCommentAction(input, id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);
