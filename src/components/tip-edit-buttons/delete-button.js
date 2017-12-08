import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, parentId, onDelete }) => {
  return (
    <FlatButton
      className="deleteButton"
      secondary
      label="Delete"
      onClick={() => onDelete(id)}
    />
  );
}
