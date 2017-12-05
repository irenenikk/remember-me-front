import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, onDelete }) => {
  return (
    <FlatButton
      id={id}
      className="deleteButton"
      secondary
      label="Delete"
      onClick={() => onDelete(id)}
    />
  );
}
