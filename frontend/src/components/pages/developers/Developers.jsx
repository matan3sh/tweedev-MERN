import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfiles } from 'store/get-profiles/actions';

import { MarkunreadMailboxIcon } from 'components/icons';
import { PageHeader, Error, Loader } from 'components/shared';
import DevelopersList from './DevelopersList';

const Developers = ({ getProfiles, errors, loading, developers }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {errors && <Error errors={errors} />}
      <PageHeader
        title='Developers Profiles'
        icon={<MarkunreadMailboxIcon />}
      />
      {loading ? <Loader /> : <DevelopersList developers={developers} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  developers: state.profiles.profiles,
  loading: state.profiles.loading,
  errors: state.profiles.error,
});

const mapDispatchToProps = {
  getProfiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
