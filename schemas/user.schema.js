// user.schema.js
export const userSchema = {
  type: "object",
//   required: ["id", "name", "username", "email"],
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    maidenName: { type: "string" },
    age: { type: "number" },
    gender: { type: "string" },
    email: { type: "string"},
    phone: { type: "string" },
    username: { type: "string" },
    password: { type: "string" },
    birthdate: { type: "string" },
  },
  additionalProperties: true
};
