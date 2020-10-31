import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from 'store/user-login/actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { PageHeader } from 'components/shared';
import { VpnKeyIcon } from 'components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

const Login = ({ login }) => {
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
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userLogin.userInfo,
  loading: state.userLogin.loading,
  error: state.userLogin.error,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
