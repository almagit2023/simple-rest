const express = require('express');
const app = express();
const config = require('dotenv').config();
const port = process.env.PORT;
const jsonData = require('./jsonData')

app.use(middleWare)

function middleWare(req, res, next){
  console.log("MiddleWare Started...")
  next()
}

app.get('/',(req, res)=>{
  res.send("Welcome to my NodeServer")
})

app.get('/home', (req, res) => {
  res.send("<center><h1>Welcome to HOME PAGE</h1></center>")
})

app.get('/api/data', (req, res)=>{
  res.json(jsonData)
})

app.get('/api/dat2', (req, res)=>{
  res.json(jsonData)
})

app.listen(port,(error)=>{
  if(error){
    console.log("Error occured....", error)
  }
  console.log(`Server started at port : ${port}`)
})