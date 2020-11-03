import React from 'react';
import { connect } from 'react-redux';
import { deleteEdu } from 'store/delete-education/actions';

import Moment from 'react-moment';
import { IconButton } from '@material-ui/core';
import { DeleteIcon, EditIcon } from 'components/icons';
import { Loader } from 'components/shared';

const DashboardEduList = ({ education, loading, deleteEdu }) => {
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
            {/* <IconButton component='span'>
              <EditIcon />
            </IconButton> */}
            {loading ? (
              <Loader />
            ) : (
              <IconButton component='span' onClick={() => deleteEdu(edu._id)}>
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
  loading: state.deleteEdu.loading,
});

const mapDispatchToProps = {
  deleteEdu,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEduList);
