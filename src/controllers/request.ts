import { isValidId } from "~/db/util";
import User from "~/db/schemas/user";
import user, { userSchema } from "~/db/schemas/user";

export const getRequestById = async (id: string) => {
  isValidId(id);
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const getPaginatedRequests = async (first: number) => {
  const [users, total] = await Promise.all([
    User.find().limit(first),
    User.countDocuments(),
  ]);
  if (!users.length) {
    throw new Error("Users not found");
  }
  return [users, total];
};

export const createRequest = async (r: Request["body"]) => {
  const user = new User(r);
  await user.validate();
  await user.save();
  return user;
};
