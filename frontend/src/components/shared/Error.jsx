import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearError } from 'store/user-login/actions';

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

const Error = ({ errors, clearError }) => {
  const classes = useStyles();

  useEffect(() => {
    if (errors !== null) {
      setTimeout(() => {
        clearError();
      }, 5000);
    }
  }, [errors, clearError]);

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
  clearError,
};

export default connect(null, mapDispatchToProps)(Error);
