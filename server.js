import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  // Importing CORS
import connectDB from './config/db.js';  // Database connection
import authRoutes from './routes/authRoutes.js';  // Authentication routes
import adminRoutes from './routes/adminRoutes.js';  // Admin routes
import customerRoutes from './routes/customerRoutes.js';  // Customer routes
import bookingRoutes from './routes/bookingRoutes.js';  // Booking routes

dotenv.config();  // Loading environment variables

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());  // Middleware for parsing JSON requests

// CORS Configuration: Allowing only the frontend URL to make requests
const corsOptions = {
  origin: 'https://sport-booking-frontend.vercel.app',  // Your Vercel frontend URL
};
app.use(cors(corsOptions));  // Applying CORS middleware with the defined options

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/admin', adminRoutes);  // Admin routes
app.use('/api', customerRoutes);  // Customer routes
app.use('/api/booking', bookingRoutes);  // Booking routes// Health Check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
  });
})

// Start the server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
