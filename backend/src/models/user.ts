import { Document, model, models, Schema } from "mongoose";
interface UserTypes extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    const id = ret._id;
    delete ret._id;
    delete ret.password;
    delete ret.__v;
    return { id, ...ret };
  },
});

const User = model<UserTypes>("users", userSchema);

export default User;
