const express = require('express');
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
