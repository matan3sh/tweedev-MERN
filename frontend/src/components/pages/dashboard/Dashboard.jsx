import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, clearProfile } from 'store/profile/actions';

import { PageHeader, Error, Loader, Info } from 'components/shared';
import { AccountBalanceWalletIcon } from 'components/icons';
import DashboardHeader from './DashboardHeader';
import DashboardExpList from './DashboardExpList';
import DashboardEduList from './DashboardEduList';

const Dashboard = ({
  getProfile,
  userProfile,
  clearProfile,
  loading,
  errors,
}) => {
  useEffect(() => {
    getProfile();
    return () => {
      clearProfile();
    };
  }, [getProfile, clearProfile]);
  return (
    <>
      <PageHeader title='Dashboard' icon={<AccountBalanceWalletIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='dashboard'>
          <DashboardHeader username={userProfile?.user?.name} />
          {userProfile === null && (
            <Info msg='Define a profile for this user' />
          )}
          <h2>Experience</h2>
          {!userProfile?.experience.length ? (
            <p>You have no experience</p>
          ) : (
            <DashboardExpList experience={userProfile?.experience} />
          )}
          <h2>Education</h2>
          {!userProfile?.education.length ? (
            <p>You have no experience</p>
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
});

const mapDispatchToProps = {
  getProfile,
  clearProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
