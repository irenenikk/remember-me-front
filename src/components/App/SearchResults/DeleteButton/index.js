import React from 'react';
import FlatButton from 'material-ui/FlatButton';


export default ({ id, onDelete }) => {
  return (
    <FlatButton
      label="Poista"
      onClick={() => onDelete(id)}
    />
  );
}
