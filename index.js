const express = require('express');

const port = 3000;

require('dotenv').config();
app=express();


const users = require('./src/routes/user.js');
const courses=require('./src/routes/course.js')

app.get('/users',users);
app.get('/courses',courses);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
