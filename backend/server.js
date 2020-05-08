const express = require('express');
const app = express();

app.use(express.static('./backend/uploads'));


// ******** COnnect to DB ******** 
const MongoClient = require("mongodb").MongoClient;
var CONNECTION_URL = "mongodb+srv://rakeshnk:rakeshnk@cluster0-wgsck.mongodb.net/test?retryWrites=true&w=majority"
const DATABASE_NAME = "mern-project";
MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    throw error;
  }
  database = client.db(DATABASE_NAME);
  console.log("Connected to `" + DATABASE_NAME + "`!");
});


//******** Parse Request Object Start ******** 
const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));




// ******** Route to Controllers  Start ******** 
var LoginController = require('./controller/LoginController');
app.use('/api/authenticate', LoginController);

var DoctorsController = require('./controller/AdminController');
app.use('/api/admin', DoctorsController);

var PatientsController = require('./controller/ConsumerController');
app.use('/api/consumer', PatientsController);

var SuperAdminController = require('./controller/SuperAdminController');
app.use('/api/superAdmin', SuperAdminController);



app.timeout = 500000;
const port = 5000;
app.listen(port, () => `Server running on port ${port}`);






//References : 
//Check Later for Auth: https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
//Check later : https://github.com/adnanrahic/securing-restful-apis-with-jwt
//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/



//******** Test if Server is Up and RUnning start : http://localhost:5000/api/customers******** 
app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];
  res.json(customers);
});
