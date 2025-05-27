import mongoose from "mongoose";
import meta from "~/db/schemas/meta";

export const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: {
    type: {
      value: { type: String, required: true, unique: true },
      marketing: { type: Boolean, required: true },
      _id: false,
    },
    required: true,
  },
  address: { type: String, required: true },
  postcode: { type: String, required: true },
  number: { type: Number, required: true, unique: true },
  products: [{ type: String }],
  meta: { type: meta, required: true, default: () => ({}) },
});

export default mongoose.model("User", userSchema);
