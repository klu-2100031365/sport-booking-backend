import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  sportId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport', required: true },  // Keep this field if you have a Sport collection
  bookedSlot: { type: String, required: true },  // Replace "timeSlot" with bookedSlot (for clarity)
  selectedDate: { type: Date, required: true },  // Date of the booking
  selectedDay: { type: String, required: true },  // Day of the booking (e.g., "Monday")
  image: { type: String, required: true },  // Image related to the booking
  paymentStatus: { type: String, required: true },  // Payment status (e.g., "paid" or "pending")
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
