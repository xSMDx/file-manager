import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="file-manager-app">
      <div className="sidebar bg-light">
        <ul className="list-group">
          <li className="list-group-item active">My Files</li>
          <li className="list-group-item">Shared</li>
          <li className="list-group-item">Recent</li>
          <li className="list-group-item">Trash</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="container mt-3">
          <h1 className="title is-4">File Manager</h1>
          <div className="file-grid">
            {/* Replace with dynamic file cards */}
            <div className="file-card">
              <div className="file-icon">📄</div>
              <div className="file-name">Document.pdf</div>
              <div className="file-options">
                <button className="btn btn-sm btn-primary">Open</button>
              </div>
            </div>
            <div className="file-card">
              <div className="file-icon">📁</div>
              <div className="file-name">Folder</div>
              <div className="file-options">
                <button className="btn btn-sm btn-secondary">Open</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
