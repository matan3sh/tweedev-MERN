import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile, clearProfile } from 'store/get-profile/actions';
import {
  deleteProfile,
  clearDeleteProfileSuccess,
} from 'store/delete-profile/actions';
import { logout } from 'store/user-auth/actions';

import Button from '@material-ui/core/Button';
import {
  PageHeader,
  Error,
  Loader,
  Info,
  SuccessSnackBar,
} from 'components/shared';
import { AccountBalanceWalletIcon, ErrorIcon } from 'components/icons';
import DashboardHeader from './DashboardHeader';
import DashboardExpList from './DashboardExpList';
import DashboardEduList from './DashboardEduList';
import DashboardCreateProfile from './DashboardCreateProfile';
import DashboardEditProfile from './DashboardEditProfile';
import DashboardAddExp from './DashboardAddExp';
import DashboardAddEdu from './DashboardAddEdu';

const Dashboard = ({
  getProfile,
  userProfile,
  clearProfile,
  loading,
  errors,
  success,
  addExpSuccess,
  addEduSuccess,
  deleteExpSuccess,
  deleteEduSuccess,
  deleteProfileSuccess,
  deleteProfile,
  logout,
  clearDeleteProfileSuccess,
}) => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddExpDialog, setOpenAddExpDialog] = useState(false);
  const [openAddEduDialog, setOpenAddEduDialog] = useState(false);

  useEffect(() => {
    getProfile();
    return () => {
      clearProfile();
    };
  }, [
    getProfile,
    clearProfile,
    success,
    addExpSuccess,
    addEduSuccess,
    deleteExpSuccess,
    deleteEduSuccess,
    clearDeleteProfileSuccess,
  ]);

  useEffect(() => {
    if (deleteProfileSuccess) {
      logout();
      clearDeleteProfileSuccess();
    }
  }, [deleteProfileSuccess, logout, clearDeleteProfileSuccess]);

  const onOpenCreateDialog = () => setOpenCreateDialog(true);
  const onCloseCreateDialog = () => setOpenCreateDialog(false);
  const onOpenEditDialog = () => setOpenEditDialog(true);
  const onCloseEditDialog = () => setOpenEditDialog(false);
  const onOpenAddExpDialog = () => setOpenAddExpDialog(true);
  const onCloseAddExpDialog = () => setOpenAddExpDialog(false);
  const onOpenAddEduDialog = () => setOpenAddEduDialog(true);
  const onCloseAddEduDialog = () => setOpenAddEduDialog(false);

  const onDeleteAccount = () => {
    const isConfirm = window.confirm(
      'Are you sure you want to delete this account?'
    );
    if (isConfirm) deleteProfile();
  };

  return (
    <>
      <DashboardCreateProfile
        open={openCreateDialog}
        onClose={onCloseCreateDialog}
      />
      <DashboardEditProfile
        open={openEditDialog}
        onClose={onCloseEditDialog}
        userProfile={userProfile}
      />
      <DashboardAddExp open={openAddExpDialog} onClose={onCloseAddExpDialog} />
      <DashboardAddEdu open={openAddEduDialog} onClose={onCloseAddEduDialog} />
      <PageHeader title='Dashboard' icon={<AccountBalanceWalletIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='dashboard'>
          <DashboardHeader
            username={userProfile?.user?.name}
            onOpenEditDialog={onOpenEditDialog}
            onOpenAddExpDialog={onOpenAddExpDialog}
            onOpenAddEduDialog={onOpenAddEduDialog}
          />
          {userProfile === null && (
            <>
              <Info msg='Please create a profile' />
              <Button
                variant='outlined'
                className='dashboard__createProfile-btn'
                onClick={onOpenCreateDialog}
              >
                Create Profile
              </Button>
            </>
          )}
          <h2>Experience</h2>
          {!userProfile?.experience.length ? (
            <p>You have no experience</p>
          ) : (
            <DashboardExpList experience={userProfile?.experience} />
          )}
          <h2>Education</h2>
          {!userProfile?.education.length ? (
            <p>You have no education</p>
          ) : (
            <DashboardEduList education={userProfile?.education} />
          )}
          <Button
            startIcon={<ErrorIcon />}
            onClick={onDeleteAccount}
            className='dashboard__deleteAccount-btn'
            variant='contained'
          >
            Delete Account
          </Button>
        </div>
      )}
      {deleteExpSuccess && (
        <SuccessSnackBar msg='Experience Deleted Successfully' />
      )}
      {deleteEduSuccess && (
        <SuccessSnackBar msg='Education Deleted Successfully' />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.profile.userProfile,
  loading: state.profile.loading,
  errors: state.profile.error,
  success: state.profileCreate.success,
  addExpSuccess: state.addExp.success,
  addEduSuccess: state.addEdu.success,
  deleteExpSuccess: state.deleteExp.success,
  deleteEduSuccess: state.deleteEdu.success,
  deleteProfileSuccess: state.deleteProfile.success,
});

const mapDispatchToProps = {
  getProfile,
  clearProfile,
  deleteProfile,
  logout,
  clearDeleteProfileSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
