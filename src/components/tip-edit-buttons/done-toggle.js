import React from 'react';
import Toggle from 'material-ui/Toggle';

export default ({ id, parentId, onDone, done }) => {
  return (
    <Toggle
      id={`${parentId}-done`}
      className="done"
      label="Done"
      toggled={done}
      onToggle={() => onDone(id)}
      style={{width: 20}}
    />
  );
}
