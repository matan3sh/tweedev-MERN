import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from 'store/add-comment/actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const HomeAddComment = ({ open, onClose, addComment, postId }) => {
  const [text, setText] = useState('');
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
          label='Comment'
          helperText='Write a comment about the post'
          multiline
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color='primary'>
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (text === '') return;
            else {
              addComment({ text }, postId);
              setText('');
              onClose();
            }
          }}
          color='primary'
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  addComment,
};

export default connect(null, mapDispatchToProps)(HomeAddComment);
