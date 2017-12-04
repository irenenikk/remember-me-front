import React from 'react';
import Toggle from 'material-ui/Toggle';

export default ({ id, onDone, done }) => {
  return (
    <Toggle
      label="Done"
      toggled={done}
      onToggle={() => onDone(id)}
      style={{width: 20}}
    />
  );
}
