import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { customerName, sportId, bookedSlot, selectedDate, selectedDay, image, paymentStatus } = req.body;

    // Create a new booking entry
    const newBooking = new Booking({
      customerName,
      sportId,
      bookedSlot,
      selectedDate,
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
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all bookings (for admin to view)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('sportId', 'name') // You can populate the sport name if you need it
      .exec();

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
