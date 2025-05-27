import mongoose from "mongoose";

export default new mongoose.Schema(
  {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    modifiedId: { type: mongoose.Schema.Types.ObjectId, default: null },
  },
  { _id: false }
);
