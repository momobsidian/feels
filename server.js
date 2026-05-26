const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable gzip compression
app.use(compression());

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve font file with caching
app.get('/font.ttf', (req, res) => {
  res.set({
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'font/ttf'
  });
  res.sendFile(path.join(__dirname, 'font.ttf'));
});

// Serve background image without caching
app.get('/Screenshot_20250904_170132.jpg', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'image/jpeg'
  });
  res.sendFile(path.join(__dirname, 'image.jpg'));
});

// Serve image.jpg alias
app.get('/image.jpg', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'image/jpeg'
  });
  res.sendFile(path.join(__dirname, 'image.jpg'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
