var mongoose = require('mongoose');

var userSchema = {
  profile: {
    username: {
      type: String,
      required: true,
      lowercase: true
    },
    picture: {
      type: String,
      required: true,
      match: /^http:\/\//i
    }
  },
  data: {
    oauth: { type: String, required: true }
  }
};

module.exports = new mongoose.Schema(userSchema);