import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ id, onEdit, edit, onFinishEditing }) => {
  return (
    <FlatButton
      backgroundColor="#ccffd5"
      hoverColor="#81f496"
      label={edit? "Save" : "Edit"}
      onClick={() => edit? onFinishEditing(id) : onEdit(id)}
    />
  );
}
