import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  birthday: Date,
}, { collection: 'friend' });

FriendSchema.set('toJSON', {
  virtuals: true,
});

const Friend = mongoose.model('Friend', FriendSchema);

export default Friend;
