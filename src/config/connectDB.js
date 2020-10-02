import bluebird from 'bluebird';
import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.Promise = bluebird;
  const URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  return mongoose.connect(URI, { useMongoClient: true });
};

module.exports = connectDB;
