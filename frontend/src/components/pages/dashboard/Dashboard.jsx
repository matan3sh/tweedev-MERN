import React from 'react';
import { connect } from 'react-redux';

import { PageHeader } from 'components/shared';
import { AccountBalanceWalletIcon } from 'components/icons';
import DashboardHeader from './DashboardHeader';
import DashboardExpList from './DashboardExpList';
import DashboardEduList from './DashboardEduList';

const Dashboard = ({ userInfo }) => {
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
});

export default connect(mapStateToProps, null)(Dashboard);
