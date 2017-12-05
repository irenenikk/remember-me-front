import React from 'react';

import TextField from 'material-ui/TextField';

export default ({ id, name, value, onChange}) => {
  return (
    <TextField
      id={id}
      value={value}
      onChange={onChange}
      floatingLabelText={name}
      name={name}
    />
  );
}
