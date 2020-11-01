import { PageHeader } from 'components/shared';
import React from 'react';

import { AccountBalanceWalletIcon } from 'components/icons';

const Dashboard = () => {
  return (
    <>
      <PageHeader title='Dashboard' icon={<AccountBalanceWalletIcon />} />
    </>
  );
};

export default Dashboard;
