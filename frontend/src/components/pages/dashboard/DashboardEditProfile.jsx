import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from 'store/create-profile/actions';

import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Error, Loader, Success } from 'components/shared';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
} from 'components/icons';

const DashboardEditProfile = ({
  open,
  onClose,
  createProfile,
  errors,
  success,
  loading,
  userProfile,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });
  const [toggleSocialLinks, setToggleSocialLinks] = useState(false);
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  useEffect(() => {
    setTimeout(() => {
      if (userProfile)
        setFormData({
          company: userProfile?.company,
          website: userProfile?.website,
          location: userProfile?.location,
          status: userProfile?.status,
          skills: userProfile?.skills,
          githubusername: userProfile?.githubusername,
          bio: userProfile?.bio,
          twitter: userProfile?.social?.twitter
            ? userProfile?.social.twitter
            : '',
          facebook: userProfile?.social?.facebook
            ? userProfile?.social.facebook
            : '',
          linkedin: userProfile?.social?.linkedin
            ? userProfile?.social.linkedin
            : '',
          youtube: userProfile?.social?.youtube
            ? userProfile?.social.youtube
            : '',
          instagram: userProfile?.social?.instagram
            ? userProfile?.social.instagram
            : '',
        });
    }, 1000);
  }, [userProfile]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onUpdateProfile = (formData) => {
    createProfile(formData);
    setToggleSocialLinks(false);
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Edit Profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Here you can describe yourself in order to create your professional
          profile.
        </DialogContentText>
        {errors && (
          <DialogContentText>
            <Error errors={errors} />
          </DialogContentText>
        )}
        {success ? (
          <Success msg='You added/updated successfully your profile' />
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <TextField
              autoFocus
              margin='dense'
              id='company'
              label='Company Name'
              helperText='Could be your own company or one you work for'
              type='text'
              fullWidth
              value={company}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='website'
              label='Website'
              helperText='Could be your own or a company website'
              type='text'
              fullWidth
              value={website}
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
            <TextField
              margin='dense'
              id='status'
              label='Proffesional Status'
              helperText='Give us an idea of where you are at in your career(eg. Senior Developer)'
              type='text'
              fullWidth
              value={status}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='skills'
              label='*Skills'
              helperText='Please use comma separated values(eg. React,Vue,Javascript)'
              type='text'
              fullWidth
              value={skills}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='githubusername'
              label='Github Username'
              helperText='If you want your latest repos and a Github link, include your username'
              type='text'
              fullWidth
              value={githubusername}
              onChange={(e) => onChange(e)}
            />
            <TextField
              margin='dense'
              id='bio'
              label='Bio'
              helperText='Tell us a little about yourself'
              multiline
              rows={4}
              type='text'
              fullWidth
              value={bio}
              onChange={(e) => onChange(e)}
            />
            <Button
              variant='outlined'
              color='primary'
              onClick={() => setToggleSocialLinks((prev) => !prev)}
              className='toggle__social-btn'
            >
              {!toggleSocialLinks ? 'Open Social Links' : 'Close Social Links'}
            </Button>
          </>
        )}
        {toggleSocialLinks && (
          <>
            <TextField
              margin='dense'
              id='twitter'
              label='Twitter URL'
              type='text'
              fullWidth
              value={twitter}
              onChange={(e) => onChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <TwitterIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='dense'
              id='facebook'
              label='Facebook URL'
              type='text'
              fullWidth
              value={facebook}
              onChange={(e) => onChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FacebookIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='dense'
              id='linkedin'
              label='Linkedin URL'
              type='text'
              fullWidth
              value={linkedin}
              onChange={(e) => onChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='dense'
              id='youtube'
              label='Youtube URL'
              type='text'
              fullWidth
              value={youtube}
              onChange={(e) => onChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <YouTubeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin='dense'
              id='instagram'
              label='Instagram URL'
              type='text'
              fullWidth
              value={instagram}
              onChange={(e) => onChange(e)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <InstagramIcon />
                  </InputAdornment>
                ),
              }}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
        {!success && (
          <Button onClick={() => onUpdateProfile(formData)} color='primary'>
            Submit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  success: state.profileCreate.success,
  loading: state.profileCreate.loading,
  errors: state.profileCreate.error,
});

const mapDispatchToProps = {
  createProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardEditProfile);
