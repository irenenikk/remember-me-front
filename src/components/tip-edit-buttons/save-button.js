import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ id, onClick }) => {
  return (
    <RaisedButton
      id={id}
      label="Save"
      onClick={onClick}
      primary={true}
      type="submit"
    />
  );
}
