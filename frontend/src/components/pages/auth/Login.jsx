import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from 'store/user-auth/actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { PageHeader, Error, Loader } from 'components/shared';
import { VpnKeyIcon } from 'components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

const Login = ({ login, errors, loading }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <PageHeader title='Login' icon={<VpnKeyIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <form
          className={`${classes.root} form-container`}
          noValidate
          autoComplete='off'
          onSubmit={onSubmit}
        >
          <TextField
            id='outlined-email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
          />
          <TextField
            id='outlined-password'
            type='password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
          />
          <Button
            variant='outlined'
            color='primary'
            className='auth__button'
            type='submit'
          >
            Login
          </Button>
        </form>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.userAuth.loading,
  errors: state.userAuth.error,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
