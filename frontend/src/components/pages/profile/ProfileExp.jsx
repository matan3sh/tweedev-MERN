import React from 'react';

const ProfileExp = ({ experience }) => {
  return (
    <div className='profileBody__left'>
      <h3>Experience</h3>
      {experience?.map((exp) => (
        <div className='profileBody__card' key={exp._id}>
          <h5>{exp.company}</h5>
          <small>
            {exp.from} - {exp.current ? 'Current' : exp.to}
          </small>
          <h6>{exp.title}</h6>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileExp;
