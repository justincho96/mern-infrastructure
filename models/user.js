const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      // ALexBEErs@gmail.com => alexbeers@gmail.com
      lowercase: true,
      required: true,
    },
    password: { type: String, trim: true, minLength: 3, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, user) {
        delete user.password;
        return user;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  // if the password has already been hashed, don't hash it again
  if (!this.isModified("password")) return next();

  // otherwise, hash the password with bcrypt
  this.password = await bcrypt.hash(this.password, 6);
  return next();
});

module.exports = mongoose.model("User", userSchema);
