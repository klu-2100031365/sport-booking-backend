import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Admin route to get all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('sportId'); // Populates sport details
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
  }
});

// Admin route to update booking payment status
router.put('/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const { paymentStatus } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(id, { paymentStatus }, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update booking', error: error.message });
  }
});

export default router;
