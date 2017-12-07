import React from 'react';
import PlayCircleFilled from 'material-ui-icons/PlayCircleFilled';
import Comment from 'material-ui-icons/Comment';
import Book from 'material-ui-icons/Book';

export default ({ type }) => {
  switch (type) {
    case "VIDEO":
      return <PlayCircleFilled />
    case "BOOK":
      return <Book />
    case "BLOGPOST":
      return <Comment />
    default:
      return <div />
  }
}
