import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearCreateProfileSuccess } from 'store/profile-create/actions';
import { clearAddExpSuccess } from 'store/add-experience/actions';
import { clearAddEduSuccess } from 'store/add-education/actions';

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

const Success = ({
  msg,
  clearCreateProfileSuccess,
  clearAddExpSuccess,
  clearAddEduSuccess,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      clearCreateProfileSuccess();
      clearAddExpSuccess();
      clearAddEduSuccess();
    }, 5000);
  }, [clearCreateProfileSuccess, clearAddExpSuccess, clearAddEduSuccess]);

  return (
    <div className={classes.root}>
      <Alert severity='success'>{msg}</Alert>
    </div>
  );
};

const mapDispatchToProps = {
  clearCreateProfileSuccess,
  clearAddExpSuccess,
  clearAddEduSuccess,
};

export default connect(null, mapDispatchToProps)(Success);
