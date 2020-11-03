import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { clearDeleteExpSuccess } from 'store/delete-experience/actions';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SuccessSnackBar = ({ msg, clearDeleteExpSuccess }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      clearDeleteExpSuccess();
    }, 2500);
  }, [clearDeleteExpSuccess]);

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity='success'>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapDispatchToProps = {
  clearDeleteExpSuccess,
};

export default connect(null, mapDispatchToProps)(SuccessSnackBar);
