import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const TweetDialog = ({ open, onClose }) => {
  const [text, setText] = useState('');
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Tweet</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label="What's Happening?"
          multiline
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={onClose} color='primary'>
          Tweet
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TweetDialog;
