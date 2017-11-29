import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, onDelete }) => {
  return (
    <FlatButton
      backgroundColor="#ffcccc"
      hoverColor="#f79196"
      label="Delete"
      onClick={() => onDelete(id)}
    />
  );
}
