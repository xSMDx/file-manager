const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

// Define the upload folder
const UPLOAD_FOLDER = path.join(__dirname, 'upload');

// Ensure the upload folder exists
if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER);
}

app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// API to list files and folders
app.get('/api/files/list', (req, res) => {
  const directoryPath = req.query.path || UPLOAD_FOLDER;
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directories');
    }
    const fileList = files.map(file => {
      const filePath = path.join(directoryPath, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      return {
        name: file,
        isDirectory,
        path: filePath,
        size: isDirectory ? null : fs.statSync(filePath).size,
        modified: fs.statSync(filePath).mtime,
      };
    });
    res.json(fileList);
  });
});

// API to create a folder
app.post('/api/files/create-folder', (req, res) => {
  const folderName = req.body.name;
  const folderPath = path.join(UPLOAD_FOLDER, folderName);
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      return res.status(500).send('Failed to create folder');
    }
    res.send('Folder created successfully');
  });
});

// API to upload a file
app.post('/api/files/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send('File uploaded successfully');
});

// API to delete a file or folder
app.delete('/api/files/delete', (req, res) => {
  const filePath = req.query.path;
  if (!filePath) {
    return res.status(400).send('No path provided');
  }
  fs.rm(filePath, { recursive: true }, (err) => {
    if (err) {
      return res.status(500).send('Failed to delete');
    }
    res.send('Deleted successfully');
  });
});

// API to rename a file or folder
app.put('/api/files/rename', (req, res) => {
  const { oldPath, newName } = req.body;
  if (!oldPath || !newName) {
    return res.status(400).send('Invalid input');
  }
  const newPath = path.join(path.dirname(oldPath), newName);
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      return res.status(500).send('Failed to rename');
    }
    res.send('Renamed successfully');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});