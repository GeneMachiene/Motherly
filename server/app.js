require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;


// middleware
app.use(express.json());


// routes
app.get('/', (req, res) =>{
  res.json({mssg: 'welcome to Motherly!'});
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    
    // listener
    app.listen(port, ()=>{
      console.log(`Listening on port ${port}`);
      console.log(`Connected to DB`);
    })

  })
  .catch(err => console.log(err));
