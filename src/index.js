require('dotenv').config();

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < 4; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
    cluster.fork();
  });

} else {
  const app = express();

  app.use(cors({
    origin: true,
    credentials: true,
  }));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(cookieParser());

  const authentication = require('./routes/api-auth.js');
  const comments = require('./routes/api-comment');
  const courses = require('./routes/api-course');
  const users = require('./routes/api-user.js');
  const admin = require('./routes/api-admin.js');
  const youtube = require('./routes/api-youtube.js');

  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10, 
    message: 'Too many requests from this IP, please try again later.'
  });


  app.use('/api/auth', limiter);
  app.use('/api/courses', courses);
  app.use('/api/auth', authentication);
  app.use('/api/comments', comments);
  app.use('/api/users', users);
  app.use('/api/admin', admin);
  app.use('/api/youtube', youtube);

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
}
