import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../Book';
import Paper from 'material-ui/Paper';

import './index.css';

class SearchResults extends Component {

  render() {
    return (
      <center>
        <Paper className="paper" zDepth={2} >
          {this.props.books.map(b =>
            <Book
              key={b.name + "-" + b.author}
              name={b.name}
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

export default connect(mapStateToProps, null)(SearchResults);
