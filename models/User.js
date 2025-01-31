import mongoose from 'mongoose';

// Define the structure of the User document
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // This field is required for each user
  },
  email: {
    type: String,
    required: true,
    unique: true // This ensures no two users can have the same email
  },
  password: {
    type: String,
    required: true // This field is required for each user
  },
  role: {
    type: String,
    default: 'user' // Default role is 'user', can be 'admin' or 'customer'
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Export the model to use it in other parts of the app
export default User;
