import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard! Here you can manage your data and view important information.</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Statistics</h2>
          <p>View your statistics here.</p>
        </div>
        <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h2>Recent Activity</h2>
          <p>Check your recent activities here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;