//this is a different way to import using REQUIRE
const express = require('express')
const app = express()
const port = 4000//this is the port that the app will be listening 
const bodyParser = require('body-parser') //it will parse the data 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//we will get a CORS error on the browser because its blocking a connection
//from host to the other 
//this will allow to allow the connection 
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//http request will come in and will be handled by the two arguments req (request) and res (response) and 
//using the callback function will send back the response
app.get('/api/books', (req, res)=>{
  //array that will hold my harded coded json file
  const books = [
  {
  "title": "Learn Git in a Month of Lunches",
  "isbn": "1617292419",
  "pageCount": 0,
  "thumbnailUrl":
  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP",
  "authors": ["Rick Umali"],
  "categories": []
  },
  {
  "title": "MongoDB in Action, Second Edition",
  "isbn": "1617291609",
  "pageCount": 0,
  "thumbnailUrl":
  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
  "status": "MEAP",
  "authors": [
  "Kyle Banker",
  "Peter Bakkum",
  "Tim Hawkins",
  "Shaun Verch",
  "Douglas Garrett"
  ],
  "categories": []
  },
  {
  "title": "Getting MEAN with Mongo, Express, Angular, and Node",
  "isbn": "1617292036",
  "pageCount": 0,
  "thumbnailUrl":
  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
  "status": "MEAP",
  "authors": ["Simon Holmes"],
  "categories": []
  }
 ];

// res.jason is sending jsonresponse
//{} donate an object 
//[] donate an array
  res.json({
    myBooks:books,
    "message" : "Hello from our API"
  })
})

//post will put the data embeded body
//is a more secure way to send secure data over the web as it wont be displayed on the url
//if we dont do the post to listen to the request from /api/books on the server side will get error 404
app.post('/api/books', (req,res) =>{
  console.log(req.body)
  res.send('Data recieved');

})

//the server is going to listen for a request for url on the port 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



