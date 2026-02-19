import { Schema, model, Document } from "mongoose";
import { Role } from "../types/auth";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "manager", "user"],
      default: "user"
    }
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
