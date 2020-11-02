import React from 'react';
import Moment from 'react-moment';

import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from 'components/icons';

const DashboardExpList = ({ experience }) => {
  return (
    <div className='dashboardList'>
      {experience?.map((exp) => (
        <div className='dashboardItem' key={exp._id}>
          <h3>{exp.company}</h3>
          <h5>{exp.title}</h5>
          <small>
            <Moment format='LL'>{exp.from}</Moment> -
            {exp.current ? (
              <span> Current</span>
            ) : (
              <Moment format='LL'>{exp.to}</Moment>
            )}
          </small>
          <div>
            <IconButton component='span'>
              <EditIcon />
            </IconButton>
            <IconButton component='span'>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardExpList;
