import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Customer route to create a new booking
router.post('/api/bookings', async (req, res) => {  // Ensure the route is consistent
  const { customerName, sportId, bookedSlot, selectedDate, selectedDay, image, paymentStatus } = req.body;

  try {
    // Create a new booking entry
    const newBooking = new Booking({
      customerName,
      sportId,
      bookedSlot,
      selectedDate,  // Ensure selectedDate and selectedDay are passed from frontend
      selectedDay,
      image,
      paymentStatus,
    });

    // Save the booking to the database
    await newBooking.save();

    res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking', error: error.message });
  }
});

export default router;
