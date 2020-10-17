import React from 'react';

const PageHeader = ({ title, icon }) => {
  return (
    <div className='page__header'>
      <div className='page__header-title'>
        <h2>{title}</h2>
        {icon}
      </div>
    </div>
  );
};

export default PageHeader;
