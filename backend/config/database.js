const mongoose = require("mongoose");

const uri = process.env.MONGODB_ATLAS_URI;
console.log("uri:", uri);
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is successfully connected.");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
