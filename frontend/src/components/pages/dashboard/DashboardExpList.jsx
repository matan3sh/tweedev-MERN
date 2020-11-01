import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from 'components/icons';

const DashboardExpList = () => {
  return (
    <div className='dashboardList'>
      <div className='dashboardItem'>
        <h3>Microsoft</h3>
        <h5>Senior Developer</h5>
        <small>02-03-2009 - 01-02-2014 </small>
        <div>
          <IconButton component='span'>
            <EditIcon />
          </IconButton>
          <IconButton component='span'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className='dashboardItem'>
        <h3>Microsoft</h3>
        <h5>Senior Developer</h5>
        <small>02-03-2009 - 01-02-2014 </small>
        <div>
          <IconButton component='span'>
            <EditIcon />
          </IconButton>
          <IconButton component='span'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className='dashboardItem'>
        <h3>Microsoft</h3>
        <h5>Senior Developer</h5>
        <small>02-03-2009 - 01-02-2014 </small>
        <div>
          <IconButton component='span'>
            <EditIcon />
          </IconButton>
          <IconButton component='span'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default DashboardExpList;
