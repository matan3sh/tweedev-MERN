import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const HomeAddComment = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Add Comment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='comment'
          label='Comment'
          helperText='Write a comment about the post'
          multiline
          rows={6}
          type='text'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => onClose()} color='primary'>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HomeAddComment;
