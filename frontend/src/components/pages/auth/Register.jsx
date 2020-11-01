import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, setError } from 'store/user-auth/actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { PageHeader, Error, Loader } from 'components/shared';
import { DetailsIcon } from 'components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

const Register = ({ register, errors, userInfo, loading, setError }) => {
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    if (userInfo) history.push('/');
  }, [userInfo, history]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError([{ msg: 'Password and Confirm Password do not match' }]);
      return;
    }
    register(name, email, password);
  };

  return (
    <>
      <PageHeader title='Register' icon={<DetailsIcon />} />
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
            id='outlined-name'
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant='outlined'
          />
          <TextField
            id='outlined-email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
          />
          <TextField
            type='password'
            id='outlined-password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
          />
          <TextField
            type='password'
            id='outlined-passwordConfirm'
            label='Confirm Password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            variant='outlined'
          />
          <Button
            variant='outlined'
            color='primary'
            className='auth__button'
            type='submit'
          >
            Register
          </Button>
        </form>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
  loading: state.userAuth.loading,
  errors: state.userAuth.error,
});

const mapDispatchToProps = {
  register,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
