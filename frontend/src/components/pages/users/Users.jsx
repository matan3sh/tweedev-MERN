import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfiles } from 'store/get-profiles/actions';

import { MarkunreadMailboxIcon } from 'components/icons';
import { PageHeader, Error, Loader } from 'components/shared';

const Users = ({ getProfiles, errors, loading }) => {
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
      {loading ? <Loader /> : <h1>Profiles</h1>}
    </>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles,
  loading: state.profiles.loading,
  errors: state.profiles.error,
});

const mapDispatchToProps = {
  getProfiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
