import React from 'react';
import { Helmet } from 'react-helmet';

import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>Welcome to the Home Page</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;

