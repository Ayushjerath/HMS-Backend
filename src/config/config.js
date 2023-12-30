require('dotenv').config();

const development = {
  mongoURI: process.env.MONGO_URI_DEV,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
};

const production = {
  mongoURI: process.env.MONGO_URI_PROD,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
};

const test = {
  mongoURI: process.env.MONGO_URI_TEST,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
};

const environment = process.env.NODE_ENV || 'development';

const db = {
  development,
  production,
  testing,
};

module.exports = db[environment];
