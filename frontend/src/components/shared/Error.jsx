import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearAuthError } from 'store/user-auth/actions';
import { clearCreateProfileError } from 'store/profile-create/actions';

import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = ({ errors, clearAuthError, clearCreateProfileError }) => {
  const classes = useStyles();

  useEffect(() => {
    if (errors !== null) {
      setTimeout(() => {
        clearAuthError();
        clearCreateProfileError();
      }, 5000);
    }
  }, [errors, clearAuthError, clearCreateProfileError]);

  const getErrors = () => {
    return errors?.map((error, index) => (
      <Alert severity='error' key={index}>
        <AlertTitle>Error</AlertTitle>
        <strong>{error.msg}</strong>
      </Alert>
    ));
  };

  return <div className={classes.root}>{getErrors()}</div>;
};

const mapDispatchToProps = {
  clearAuthError,
  clearCreateProfileError,
};

export default connect(null, mapDispatchToProps)(Error);
