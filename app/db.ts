const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(
      "mongodb://127.0.0.1:27017/your-db-name",
      connectionParams
    );
    console.log("Connected to database");
  } catch (error) {
    console.error(`${error} could not connect to database`);
  }
};
