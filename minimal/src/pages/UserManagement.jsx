import React from 'react';
import EmptyState from '../components/EmpteyState';

const UserManagement = () => {
  return (
    <EmptyState 
      title="User Management" 
      type="user"
      description="Manage your users, roles, and permissions from this section."
    />
  );
};

export default UserManagement;