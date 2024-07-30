export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  name: string;
} & LoginUser;

export type User = {
  id: string;
  created_at: string;
  updated_at: string;
} & Omit<RegisterUser, "password">;
