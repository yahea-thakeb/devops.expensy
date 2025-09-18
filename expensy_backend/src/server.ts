import app from './app';

const port = process.env.PORT || 8706;

// ✅ Define the route BEFORE app.listen
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

