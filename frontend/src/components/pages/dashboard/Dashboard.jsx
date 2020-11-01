import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, clearProfile } from 'store/profile/actions';

import { PageHeader } from 'components/shared';
import { AccountBalanceWalletIcon } from 'components/icons';
import DashboardHeader from './DashboardHeader';
import DashboardExpList from './DashboardExpList';
import DashboardEduList from './DashboardEduList';

const Dashboard = ({ userInfo, getProfile, userProfile, clearProfile }) => {
  useEffect(() => {
    getProfile();
    return () => {
      clearProfile();
    };
  }, [getProfile, clearProfile]);
  return (
    <>
      <PageHeader title='Dashboard' icon={<AccountBalanceWalletIcon />} />
      <div className='dashboard'>
        <DashboardHeader username={userInfo?.name} />
        <h2>Experience</h2>
        <DashboardExpList />
        <h2>Education</h2>
        <DashboardEduList />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userAuth.userInfo,
  userProfile: state.profile.userProfile,
});

const mapDispatchToProps = {
  getProfile,
  clearProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
