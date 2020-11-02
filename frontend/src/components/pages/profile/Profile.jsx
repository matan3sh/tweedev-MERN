import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, clearProfile } from 'store/profile/actions';
import { getRepos, clearRepos } from 'store/github-repos/actions';

import { Loader, PageHeader, Error, Info } from 'components/shared';
import { AssignmentIndIcon } from 'components/icons';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';
import ProfileFooter from './ProfileFooter';

const Profile = ({
  getProfile,
  userProfile,
  loading,
  errors,
  clearProfile,
  getRepos,
  clearRepos,
  repos,
  reposLoading,
}) => {
  useEffect(() => {
    getProfile();
    return () => {
      clearProfile();
    };
  }, [getProfile, clearProfile]);

  useEffect(() => {
    if (userProfile?.githubusername) getRepos(userProfile?.githubusername);
    return () => {
      clearRepos();
    };
  }, [userProfile, clearRepos, getRepos]);

  return (
    <>
      <PageHeader title='Profile' icon={<AssignmentIndIcon />} />
      {errors && <Error errors={errors} />}
      {userProfile === null && !loading ? (
        <Info msg='There is no profile for this user' />
      ) : loading ? (
        <Loader />
      ) : (
        <div className='profile'>
          <ProfileHeader
            avatar={userProfile?.user?.avatar}
            name={userProfile?.user?.name}
            status={userProfile?.status}
            location={userProfile?.location}
            bio={userProfile?.bio}
            skills={userProfile?.skills}
          />
          <ProfileBody
            experience={userProfile?.experience}
            education={userProfile?.education}
          />
          {repos?.length === 0 ? (
            <Info msg='There are no github repos' />
          ) : !userProfile?.githubusername ? (
            <Info msg='Please provide github username' />
          ) : reposLoading ? (
            <Loader />
          ) : (
            <ProfileFooter repos={repos} />
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.profile.userProfile,
  loading: state.profile.loading,
  errors: state.profile.error,
  repos: state.github.repos,
  reposLoading: state.github.loading,
});

const mapDispatchToProps = {
  getProfile,
  clearProfile,
  getRepos,
  clearRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
