const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Set storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/gallery/'); // Save to gallery folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.toLowerCase());
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(__dirname));

// Upload endpoint
app.post('/upload', upload.array('images', 20), (req, res) => {
  res.json({status: 'success', files: req.files.map(f => f.filename)});
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
