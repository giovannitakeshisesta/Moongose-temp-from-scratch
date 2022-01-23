const mongoose = require('mongoose');

//import of the configuration of the connection to the database
require("./config/db.config");

// Import of the model  from 'DataArray.model.js'
const Zzzzz = require('./models/DataArray.model');

// Import of the data from './data.json'
const data = require('./data');



// Connect to the database "nameOfTheDb"
//Call callback when Mongoose is connected.  mongoose.connection.on/once('connected', callback)
mongoose.connection.once('open', () => {

  //delete the db
  mongoose.connection.db.dropDatabase()
  .then(() => console.log('Database has been cleared')) 


  // CREATE collection "nameofthecollections" and import an array of datas   //Model.create(array de datos)
  .then(() => {return Zzzzz.create(data)})


  // READ
  .then(result => {
    result.forEach(element => console.log(element.title));
  })


  // UPDATE the duration field and set it to 100
  .then(result => {
    return Zzzzz.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }, { new: true })
  })
  .then(result => { console.log(`The new duration of the "${result.title}" is `,result.duration)})


  // DELETE 
  .then(result => { 
    return Zzzzz.findOneAndDelete({ title: 'Carrot Cake' })
  })
  .then(result => {console.log(`The "${result.title}" has been eliminated`)})


  .catch(err => console.log("Message from the catch of the index.js = ",err))
  .finally(() => mongoose.connection.close())
})  