import mongoose from "mongoose";
import bcrypt from "bcrypt";
const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { Timestamp: true },
);

authSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) {
      return;
    }
    const salt = 12;
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (error) {
    throw error;
  }
});
authSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

const authModel = mongoose.model("users", authSchema);
export default authModel;
