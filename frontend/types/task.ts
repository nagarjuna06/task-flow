export enum TaskStatus {
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  UNDER_REVIEW = "UNDER_REVIEW",
  FINISHED = "FINISHED",
}

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export type CreateTask = {
  title: string;
  status: TaskStatus;
  priority?: TaskPriority;
  deadline?: string;
  description?: string;
};

export type Task = {
  id: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
} & CreateTask;
