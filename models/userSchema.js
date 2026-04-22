import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  email: { type: String, unique: true },
  password: { type: String, required: true, minlength: 8},
});

const User = mongoose.model('Users', UserSchema);

export default User;