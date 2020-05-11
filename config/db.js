const mongooose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    mongooose.connect(db, {
        useNewUrlParser: true
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
    //exit process with failuire
    process.exit(1);
  }
};

module.exports = connectDB;
