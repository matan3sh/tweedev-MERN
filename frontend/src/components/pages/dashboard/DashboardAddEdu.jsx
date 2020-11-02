import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEdu } from 'store/add-education/actions';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Error, Loader, Success } from 'components/shared';

const DashboardAddEdu = ({
  open,
  onClose,
  addEdu,
  errors,
  success,
  loading,
}) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: Date.now(),
    to: Date.now(),
    description: '',
  });
  const { school, degree, fieldofstudy, from, to, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onAddExp = (formData) => {
    addEdu(formData);
    setFormData({
      school: '',
      degree: '',
      fieldofstudy: '',
      from: Date.now(),
      to: Date.now(),
      description: '',
    });
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Add Education</DialogTitle>
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
              id='school'
              label='School'
              type='text'
              fullWidth
              value={school}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='degree'
              label='Degree'
              type='text'
              fullWidth
              value={degree}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='fieldofstudy'
              label='Field of Study'
              type='text'
              fullWidth
              value={fieldofstudy}
              onChange={(e) => onChange(e)}
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
  success: state.addEdu.success,
  loading: state.addEdu.loading,
  errors: state.addEdu.error,
});

const mapDispatchToProps = {
  addEdu,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAddEdu);
