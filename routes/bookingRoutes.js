import express from 'express';
import { createBooking, getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

// POST request for creating a booking
router.post('/api/bookings', createBooking);

// GET request for fetching all bookings (admin view)
router.get('/api/bookings', getAllBookings);

export default router;
