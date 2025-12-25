const express = require('express');
const multer  = require('multer');
const sharp = require('sharp');
const path = require('path');
const app = express();
const PORT = 3000;

// Admin credentials
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'nature001@';

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

// Multer storage and upload
const storage = multer.diskStorage({
  destination: (req,file,cb) => cb(null,'assets/gallery/'),
  filename: (req,file,cb) => cb(null,file.originalname.toLowerCase())
});
const upload = multer({ storage: storage, limits: { fileSize: 10*1024*1024 } });

app.post('/upload', auth, upload.array('images',20), async (req,res)=>{
  const processedFiles = [];
  for(const file of req.files){
    await sharp(file.path)
      .resize({ width:1920 })
      .toFile(file.path.replace(/\.(jpg|jpeg|png)$/i,'.webp'));
    processedFiles.push(file.filename);
  }
  res.json({ status:'success', files:processedFiles });
});

// Start server
app.listen(PORT, ()=>console.log(`Server running at http://localhost:${PORT}`));
