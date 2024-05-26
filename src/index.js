require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const app=express();


app.use(cors());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


const authentication = require('./routes/api-auth.js');
const comment=require('./routes/api-comment');
const courses = require('./routes/api-course');
const users=require('./routes/api-user.js')
app.use('/api/courses',courses);
app.use('/api/auth', authentication);
app.use('/api/comments',comment);
app.use('/api/courses', courses);
app.use('/api/users',users);
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
