import env from "~/config";
import mongoose, { ConnectOptions } from "mongoose";

class DB extends mongoose.Mongoose {
  isConnected: boolean = false;

  constructor() {
    super();
  }

  async init(): Promise<this> {
    if (this.isConnected) return this;
    const options: ConnectOptions = {};
    await mongoose.connect(env.MONGO_URI, options);
    this.isConnected = true;
    return this;
  }
}

export default new DB();
