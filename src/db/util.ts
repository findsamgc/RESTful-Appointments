import mongoose from "mongoose";

export const isValidId = (id: string) => {
  if (!id || typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID format");
  }
};
