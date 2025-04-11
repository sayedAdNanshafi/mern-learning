const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('uncaught Exception:shutting down');
  console.log(err.name, err.message);
  process.exit(1);
});
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection successfull');
  });
const port = process.env.PORT || 8000;

const server = app.listen(port, (err) => console.log('server started'));
process.on('unhandledRejection', (err) => {
  console.log('unhandled rejection:shutting down');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
