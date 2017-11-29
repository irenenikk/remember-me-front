import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import Paper from 'material-ui/Paper'
import { deleteBookAction } from '../../../../state/actions';

class ListBooks extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.books.map(b =>
            <Book
              key={b.id}
              id={b.id}
              title={b.title}
              author={b.author}
              description={b.description}
              tags={b.tags}
              onDelete={this.props.handleDelete}
            />
          )}
        </Paper>
      </center>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.list.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDelete(id) {
      dispatch(deleteBookAction(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);
