import React from 'react';

const ProfileEdu = ({ education }) => {
  return (
    <div className='profileBody__right'>
      <h3>Education</h3>
      {education?.map((edu) => (
        <div className='profileBody__card' key={edu._id}>
          <h5>{edu.school}</h5>
          <small>
            {edu.from} - {edu.current ? 'Current' : edu.to}
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
