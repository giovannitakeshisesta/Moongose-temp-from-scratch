const mongoose = require("mongoose")

// set the url to the db and/or the db name
const MONGODB_URI = "mongodb://localhost:27017/nameOfTheDb";

// connect to the url
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Message from db.config.js / Error connecting to mongo', err))

//process.on('SIGINT', callback)	
// Call callback just before stopping Node (can be simulated with <Ctrl>-C)
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});