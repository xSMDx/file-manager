import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>File Manager</h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className="active">📁 Home</li>
          <li>📂 Files</li>
          <li>🚀 Started</li>
          <li>👥 Shared</li>
          <li>🔄 Recovery</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>
      <div className="sidebar-storage">
        <div className="storage-info">
          <span>12.47GB of 50GB used</span>
          <div className="storage-bar">
            <div className="storage-used" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;