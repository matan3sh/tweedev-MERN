import React from 'react';
import Moment from 'react-moment';

const ProfileExp = ({ experience }) => {
  return (
    <div className='profileBody__left'>
      <h3>Experience</h3>
      {experience?.map((exp) => (
        <div className='profileBody__card' key={exp._id}>
          <h5>{exp.company}</h5>
          <small>
            <Moment format='LL'>{exp.from}</Moment> -
            {exp.current ? (
              <span> Current</span>
            ) : (
              <Moment format='LL'>{exp.to}</Moment>
            )}{' '}
          </small>
          <h6>{exp.title}</h6>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileExp;
