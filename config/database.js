const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect('mongodb://127.0.0.1/javascriptNote', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connection succesful'))
.catch((err) => console.log(err));
