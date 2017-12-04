import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, onDone, done }) => {
  return (
    <FlatButton
      secondary
      label={done? "Undone" : "Done"}
      onClick={() => onDone(id)}
    />
  );
}
