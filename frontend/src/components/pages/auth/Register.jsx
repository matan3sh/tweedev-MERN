import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { PageHeader } from 'components/shared';
import { DetailsIcon } from 'components/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) return;
    const userCredentials = { name, email, password };
    console.log(userCredentials);
  };

  return (
    <>
      <PageHeader title='Register' icon={<DetailsIcon />} />
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
          id='outlined-password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant='outlined'
        />
        <TextField
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
          disabled={password !== passwordConfirm}
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default Register;
