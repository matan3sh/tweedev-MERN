import React from 'react';
import Button from '@material-ui/core/Button';

import {
  PermContactCalendarIcon,
  BusinessCenterIcon,
  CastForEducationIcon,
} from 'components/icons';

const DashboardHeader = ({
  username,
  onOpenEditDialog,
  onOpenAddExpDialog,
  onOpenAddEduDialog,
}) => {
  return (
    <div className='dashboard__header'>
      <h3>
        Welcome <span>{username}</span>
      </h3>
      {username && (
        <div className='dashboard__buttons'>
          <Button
            startIcon={<PermContactCalendarIcon />}
            onClick={() => onOpenEditDialog()}
          >
            Edit Profile
          </Button>
          <Button
            startIcon={<BusinessCenterIcon />}
            onClick={() => onOpenAddExpDialog()}
          >
            Add Experience
          </Button>
          <Button
            startIcon={<CastForEducationIcon />}
            onClick={() => onOpenAddEduDialog()}
          >
            Add Education
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
