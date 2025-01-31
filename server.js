import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'; // Import the auth routes
import adminRoutes from './routes/adminRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js'; // Add the booking routes

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // For parsing JSON data
app.use(cors()); // Enable CORS

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/admin', adminRoutes);  // Mount admin routes here
app.use('/api', customerRoutes);  // Mount customer routes under /api

// Start the server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
