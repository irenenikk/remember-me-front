import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ id, onClick }) => {
  return (
    <RaisedButton
      id={id}
      className="saveButton"
      label="Save"
      onClick={onClick}
      primary={true}
      type="submit"
    />
  );
}
