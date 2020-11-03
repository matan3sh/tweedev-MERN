import React from 'react';
import { connect } from 'react-redux';
import { deleteExp } from 'store/delete-experience/actions';

import Moment from 'react-moment';
import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from 'components/icons';
import { Loader } from 'components/shared';

const DashboardExpList = ({
  experience,
  deleteExp,
  success,
  loading,
  error,
}) => {
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
            {loading ? (
              <Loader />
            ) : (
              <IconButton component='span' onClick={() => deleteExp(exp._id)}>
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  success: state.deleteExp.success,
  loading: state.deleteExp.loading,
  errors: state.deleteExp.error,
});

const mapDispatchToProps = {
  deleteExp,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardExpList);
