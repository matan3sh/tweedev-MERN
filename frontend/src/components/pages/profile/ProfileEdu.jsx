import React from 'react';
import Moment from 'react-moment';

const ProfileEdu = ({ education }) => {
  return (
    <div className='profileBody__right'>
      <h3>Education</h3>
      {education?.map((edu) => (
        <div className='profileBody__card' key={edu._id}>
          <h5>{edu.school}</h5>
          <small>
            <Moment format='ll'>{edu.from}</Moment> -
            {edu.current ? (
              <span> Current</span>
            ) : (
              <Moment format='ll'>{edu.to}</Moment>
            )}{' '}
          </small>
          <h6>
            {edu.degree}, {edu.fieldofstudy}
          </h6>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileEdu;
