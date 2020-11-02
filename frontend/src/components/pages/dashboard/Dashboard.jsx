import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile, clearProfile } from 'store/profile/actions';

import Button from '@material-ui/core/Button';
import { PageHeader, Error, Loader, Info } from 'components/shared';
import { AccountBalanceWalletIcon } from 'components/icons';
import DashboardHeader from './DashboardHeader';
import DashboardExpList from './DashboardExpList';
import DashboardEduList from './DashboardEduList';
import DashboardCreateProfile from './DashboardCreateProfile';
import DashboardEditProfile from './DashboardEditProfile';

const Dashboard = ({
  getProfile,
  userProfile,
  clearProfile,
  loading,
  errors,
  success,
}) => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  useEffect(() => {
    getProfile();
    return () => {
      clearProfile();
    };
  }, [getProfile, clearProfile, success]);

  const onOpenCreateDialog = () => setOpenCreateDialog(true);
  const onCloseCreateDialog = () => setOpenCreateDialog(false);
  const onOpenEditDialog = () => setOpenEditDialog(true);
  const onCloseEditDialog = () => setOpenEditDialog(false);

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
      <PageHeader title='Dashboard' icon={<AccountBalanceWalletIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='dashboard'>
          <DashboardHeader
            username={userProfile?.user?.name}
            onOpenEditDialog={onOpenEditDialog}
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
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.profile.userProfile,
  loading: state.profile.loading,
  errors: state.profile.error,
  success: state.profileCreate.success,
});

const mapDispatchToProps = {
  getProfile,
  clearProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
