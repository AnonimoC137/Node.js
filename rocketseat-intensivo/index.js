// const {Person} = require('./person');

// const person = new Person('alexandre')

// console.log(person.sayMyName());

// require("./modules/fs");

// require('./modules/http');
require('./modules/express')

const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')

dotenv.config();
//precisa ser startado depois do dotenv.config
connectToDatabase();