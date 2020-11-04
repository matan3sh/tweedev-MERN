import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from 'store/add-post/actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const TweetDialog = ({ open, onClose, addPost }) => {
  const history = useHistory();
  const [text, setText] = useState('');

  const onAddPost = () => {
    if (text === '') return;
    else {
      addPost({ text });
      onClose();
      setText('');
      history.replace('/');
    }
  };

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
        <Button onClick={onAddPost} color='primary'>
          Tweet
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  addPost,
};

export default connect(null, mapDispatchToProps)(TweetDialog);
