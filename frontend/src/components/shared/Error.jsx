import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearAuthError } from 'store/user-auth/actions';
import { clearCreateProfileError } from 'store/create-profile/actions';
import { clearAddExpError } from 'store/add-experience/actions';
import { clearAddEduError } from 'store/add-education/actions';

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

const Error = ({
  errors,
  clearAuthError,
  clearCreateProfileError,
  clearAddExpError,
  clearAddEduError,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (errors !== null) {
      setTimeout(() => {
        clearAuthError();
        clearCreateProfileError();
        clearAddExpError();
        clearAddEduError();
      }, 5000);
    }
  }, [
    errors,
    clearAuthError,
    clearCreateProfileError,
    clearAddExpError,
    clearAddEduError,
  ]);

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
  clearAddExpError,
  clearAddEduError,
};

export default connect(null, mapDispatchToProps)(Error);
