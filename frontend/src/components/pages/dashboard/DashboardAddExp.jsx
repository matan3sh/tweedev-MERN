import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExp } from 'store/add-experience/actions';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Error, Loader, Success } from 'components/shared';

const DashboardAddExp = ({
  open,
  onClose,
  addExp,
  errors,
  success,
  loading,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    from: Date.now(),
    to: Date.now(),
    current: false,
    description: '',
  });
  const { title, company, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onAddExp = (formData) => {
    addExp(formData);
    setFormData({
      title: '',
      company: '',
      location: '',
      from: Date.now(),
      to: Date.now(),
      current: false,
      description: '',
    });
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Add Experience</DialogTitle>
      <DialogContent>
        {errors && (
          <DialogContentText>
            <Error errors={errors} />
          </DialogContentText>
        )}
        {success ? (
          <Success msg='Experience added successfully' />
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <TextField
              autoFocus
              margin='dense'
              id='title'
              label='Role'
              type='text'
              fullWidth
              value={title}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='company'
              label='Company'
              type='text'
              fullWidth
              value={company}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='location'
              label='Location'
              helperText='City and State suggested(eg. New York, NY)'
              type='text'
              fullWidth
              value={location}
              onChange={(e) => onChange(e)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-around'>
                <KeyboardDatePicker
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='from'
                  label='From'
                  value={from}
                  onChange={(date) => setFormData({ ...formData, from: date })}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardDatePicker
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='to'
                  label='To'
                  value={to}
                  onChange={(date) => setFormData({ ...formData, to: date })}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <FormControlLabel
              control={
                <Checkbox
                  id='current'
                  checked={current}
                  onChange={(e) =>
                    setFormData({ ...formData, current: e.target.checked })
                  }
                  color='primary'
                />
              }
              label='Current'
            />
            <TextField
              margin='dense'
              id='description'
              label='Description'
              helperText='Describe your job role'
              multiline
              rows={4}
              type='text'
              fullWidth
              value={description}
              onChange={(e) => onChange(e)}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
        {!success && (
          <Button onClick={() => onAddExp(formData)} color='primary'>
            Submit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  success: state.addExp.success,
  loading: state.addExp.loading,
  errors: state.addExp.error,
});

const mapDispatchToProps = {
  addExp,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAddExp);
