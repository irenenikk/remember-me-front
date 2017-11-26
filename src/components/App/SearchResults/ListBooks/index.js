import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../Book';
import Paper from 'material-ui/Paper';

class ListBooks extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.books.map(b =>
            <Book
              key={b.id}
              title={b.title}
              author={b.author}
              description={b.description}
              tags={b.tags}
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

export default connect(mapStateToProps, null)(ListBooks);
