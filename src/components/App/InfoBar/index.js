import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default ({ message }) => {
  return (
    <Snackbar
      open={message !== ""}
      message={message}
      autoHideDuration={4000}
    />
  )
}
