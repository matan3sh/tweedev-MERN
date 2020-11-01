import React from 'react';
import Button from '@material-ui/core/Button';

import {
  PermContactCalendarIcon,
  BusinessCenterIcon,
  CastForEducationIcon,
} from 'components/icons';

const DashboardHeader = ({ username }) => {
  return (
    <div className='dashboard__header'>
      <h3>
        Welcome <span>{username}</span>
      </h3>
      <div className='dashboard__buttons'>
        <Button startIcon={<PermContactCalendarIcon />}>Edit Profile</Button>
        <Button startIcon={<BusinessCenterIcon />}>Add Experience</Button>
        <Button startIcon={<CastForEducationIcon />}>Add Education</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
