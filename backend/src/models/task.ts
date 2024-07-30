import { model, Schema } from "mongoose";

interface TaskTypes extends Document {
  title: string;
  status: string;
  priority: string;
  deadline: Date;
  description: string;
  createdBy: string;
}

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    status: {
      type: String,
      enum: ["TO_DO", "IN_PROGRESS", "UNDER_REVIEW", "FINISHED"],
      default: "TO_DO",
    },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
      default: "MEDIUM",
    },
    deadline: Date,
    description: {
      type: String,
      minLength: 10,
      maxLength: 500,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.set("toJSON", {
  transform: (doc, ret) => {
    const id = ret._id;
    delete ret._id;
    delete ret.__v;

    return { id, ...ret };
  },
});

const Task = model<TaskTypes>("tasks", taskSchema);

export default Task;
