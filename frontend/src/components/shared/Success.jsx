import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearCreateProfileSuccess } from 'store/profile-create/actions';

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Success = ({ msg, clearCreateProfileSuccess }) => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      clearCreateProfileSuccess();
    }, 5000);
  }, [clearCreateProfileSuccess]);

  return (
    <div className={classes.root}>
      <Alert severity='success'>{msg}</Alert>
    </div>
  );
};

const mapDispatchToProps = {
  clearCreateProfileSuccess,
};

export default connect(null, mapDispatchToProps)(Success);
