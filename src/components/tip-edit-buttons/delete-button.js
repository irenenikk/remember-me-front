import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, onDelete }) => {
  return (
    <FlatButton
      className="deleteButton"
      secondary
      label="Delete"
      onClick={() => onDelete(id)}
    />
  );
}
