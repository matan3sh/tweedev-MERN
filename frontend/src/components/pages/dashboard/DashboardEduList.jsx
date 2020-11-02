import React from 'react';
import Moment from 'react-moment';

import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from 'components/icons';

const DashboardEduList = ({ education }) => {
  return (
    <div className='dashboardList'>
      {education?.map((edu) => (
        <div className='dashboardItem' key={edu._id}>
          <h3>{edu.school}</h3>
          <h5>
            {edu.degree}, {edu.fieldofstudy}
          </h5>

          <small>
            <Moment format='LL'>{edu.from}</Moment> -
            {edu.current ? (
              <span> Current</span>
            ) : (
              <Moment format='LL'>{edu.to}</Moment>
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

export default DashboardEduList;
