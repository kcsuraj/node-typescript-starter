import { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  fullName: string;
}

const UserSchema: Schema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true
  },
  fullName: {
    required: true,
    type: String
  }
});

const Users = model<IUser>('users', UserSchema);

export default Users;
