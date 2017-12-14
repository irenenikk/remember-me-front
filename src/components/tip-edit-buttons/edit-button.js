import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, onEdit, edit, onFinishEditing }) => {
  return (
    <FlatButton
      className="editButton"
      primary
      label={edit? "Save" : "Edit"}
      onClick={() => edit? onFinishEditing(id) : onEdit(id)}
    />
  );
}
