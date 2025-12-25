const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Admin credentials
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'password123';

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if(!authHeader){
    res.setHeader('WWW-Authenticate','Basic');
    return res.status(401).send('Authentication required');
  }
  const base64 = authHeader.split(' ')[1];
  const [user, pass] = Buffer.from(base64,'base64').toString().split(':');
  if(user===ADMIN_USER && pass===ADMIN_PASS) return next();
  res.setHeader('WWW-Authenticate','Basic');
  return res.status(401).send('Authentication failed');
};

// Serve static files
app.use(express.static(__dirname));
app.use('/dev', auth, express.static(path.join(__dirname,'dev')));

// Multer storage
const storage = multer.diskStorage({
  destination: (req,file,cb) => cb(null,'assets/gallery/'),
  filename: (req,file,cb) => cb(null,file.originalname.toLowerCase())
});
const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', auth, upload.array('images',20), (req,res)=>{
  res.json({status:'success', files: req.files.map(f=>f.filename)});
});

// Start server
app.listen(PORT, ()=>console.log(`Server running at http://localhost:${PORT}`));
