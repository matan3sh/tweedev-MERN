const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(express.json({ extended: false }));

// Routes
const userRoutes = require('./api/user/user.routes');
app.use('/api/users', userRoutes);
const profileRoutes = require('./api/profile/profile.routes');
app.use('/api/profile', profileRoutes);
const postRoutes = require('./api/post/post.routes');
app.use('/api/posts', postRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is runing...');
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
