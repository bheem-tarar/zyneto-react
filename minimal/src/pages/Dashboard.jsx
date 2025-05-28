import React from 'react';
import EmpteyState from '../components/EmpteyState';

const Dashboard = () => {
  return (
    <EmpteyState 
      title="Dashboard" 
      type="dashboard"
      description="Welcome to your dashboard! Analytics and key metrics will be displayed here."
    />
  );
};

export default Dashboard;