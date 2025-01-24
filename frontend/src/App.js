import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showQuickAccess, setShowQuickAccess] = useState(true);
  const [showRecentFiles, setShowRecentFiles] = useState(true);

  // Dummy data for Quick Access and Recent Files
  const quickAccess = [
    { name: 'UI Design', type: 'folder', size: '4.5 MB', date: 'Today', members: 3 },
    { name: 'DashLife Resource', type: 'folder', size: '4.5 MB', date: 'Today', members: 3 },
    { name: 'Projects', type: 'folder', size: '235 KB', date: 'Yesterday', members: 3 },
    { name: 'All work.zip', type: 'file', size: '235 KB', date: '03 May', members: 3 },
    { name: 'Sales Reports.xlsx', type: 'file', size: '23 MB', date: '25 Apr', members: 3 },
  ];

  const recentFiles = [
    { name: 'Proposal', type: 'folder', size: '4.5 MB', date: 'Today', members: 3 },
    { name: '2019 Projects', type: 'folder', size: '235 KB', date: '03 May', members: 3 },
    { name: 'Update Data.xlsx', type: 'file', size: '235 KB', date: 'Yesterday', members: 3 },
    { name: 'deadline... 1.2.zip', type: 'file', size: '235 KB', date: '01 May', members: 3 },
    { name: 'Price-Update.doc', type: 'file', size: '23 MB', date: '06 Apr', members: 3 },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File uploaded:', file.name);
      // Add file upload logic here
    }
  };

  const handleCreateFolder = () => {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
      console.log('Folder created:', folderName);
      // Add folder creation logic here
    }
  };

  return (
    <div className="file-manager">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Top Zone: Search Bar and Buttons */}
        <div className="top-zone">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search files, folders"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="action-buttons">
            <input
              type="file"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <button
              className="action-btn"
              onClick={() => document.getElementById('file-upload').click()}
            >
              <span className="icon">📤</span>
              <span className="text">Upload</span>
            </button>
            <button className="action-btn" onClick={handleCreateFolder}>
              <span className="icon">➕</span>
              <span className="text">Create</span>
            </button>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="section">
          <div className="section-header">
            <h2>Quick Access</h2>
            <button
              className="toggle-btn"
              onClick={() => setShowQuickAccess(!showQuickAccess)}
            >
              {showQuickAccess ? 'Hide' : 'Show'}
            </button>
          </div>
          {showQuickAccess && (
            <div className="file-grid">
              {quickAccess.map((item, index) => (
                <div key={index} className="file-item">
                  <div className="file-icon">{item.type === 'folder' ? '📁' : '📄'}</div>
                  <div className="file-details">
                    <div className="file-name">{item.name}</div>
                    <div className="file-info">
                      {item.date} - {item.size} - {item.members} Members
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Files Section */}
        <div className="section">
          <div className="section-header">
            <h2>Recent Files</h2>
            <button
              className="toggle-btn"
              onClick={() => setShowRecentFiles(!showRecentFiles)}
            >
              {showRecentFiles ? 'Hide' : 'Show'}
            </button>
          </div>
          {showRecentFiles && (
            <div className="file-grid">
              {recentFiles.map((item, index) => (
                <div key={index} className="file-item">
                  <div className="file-icon">{item.type === 'folder' ? '📁' : '📄'}</div>
                  <div className="file-details">
                    <div className="file-name">{item.name}</div>
                    <div className="file-info">
                      {item.date} - {item.size} - {item.members} Members
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;