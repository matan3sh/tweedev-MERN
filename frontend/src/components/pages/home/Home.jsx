import React from 'react';
import { connect } from 'react-redux';
import HomeFeed from './HomeFeed';

const Home = () => {
  return (
    <div className='home'>
      <HomeFeed />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
