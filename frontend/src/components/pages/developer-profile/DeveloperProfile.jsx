import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDevProfile, clearDevProfile } from 'store/get-dev-profile/actions';
import { getRepos, clearRepos } from 'store/github-repos/actions';

import { DeveloperBoardIcon } from 'components/icons';
import { PageHeader } from 'components/shared';
import { Error, Loader, Info } from 'components/shared';
import ProfileHeader from 'components/pages/profile/ProfileHeader';
import ProfileBody from 'components/pages/profile/ProfileBody';
import ProfileFooter from 'components/pages/profile/ProfileFooter';

const DeveloperProfile = ({
  match,
  getDevProfile,
  loading,
  errors,
  devProfile,
  clearDevProfile,
  clearRepos,
  getRepos,
  reposLoading,
  repos,
}) => {
  useEffect(() => {
    const { profileId } = match.params;
    getDevProfile(profileId);
    return () => {
      clearDevProfile();
    };
  }, [match, getDevProfile, clearDevProfile]);

  useEffect(() => {
    if (devProfile?.githubusername) getRepos(devProfile?.githubusername);
    return () => {
      clearRepos();
    };
  }, [devProfile, clearRepos, getRepos]);

  return (
    <>
      <PageHeader title='Developer Profile' icon={<DeveloperBoardIcon />} />
      {errors && <Error errors={errors} />}
      {loading ? (
        <Loader />
      ) : (
        <div className='profile'>
          <ProfileHeader userProfile={devProfile} />
          <ProfileBody
            experience={devProfile?.experience}
            education={devProfile?.education}
          />
          {repos?.length === 0 ? (
            <Info msg='There are no github repos' />
          ) : !devProfile?.githubusername ? (
            <Info msg='No github username provided' />
          ) : reposLoading ? (
            <Loader />
          ) : (
            <ProfileFooter
              repos={repos}
              githubusername={devProfile?.githubusername}
            />
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  devProfile: state.devProfile.devProfile,
  loading: state.devProfile.loading,
  errors: state.devProfile.error,
  repos: state.github.repos,
  reposLoading: state.github.loading,
});

const mapDispatchToProps = {
  getDevProfile,
  getRepos,
  clearRepos,
  clearDevProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperProfile);
