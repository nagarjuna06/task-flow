export type Field = {
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
};

export const loginFields: Field[] = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const registerFields: Field[] = [
  {
    name: "name",
    placeholder: "Name",
    type: "text",
  },
  ...loginFields,
];

export const registerDefaultValues = {
  name: "",
  ...loginDefaultValues,
};
