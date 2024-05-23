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


const users = require('./routes/api-user.js');
const courses=require('./routes/api-course.js')
const authentication = require('./routes/api-auth.js');


app.use('/users',users);
app.use('/courses',courses);
app.use('/api/auth', authentication);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
