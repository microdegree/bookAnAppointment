var express = require('express');
var router = express.Router();

// ******** User Signup ******** 

router.post("/signUp", (request, response) => {
    console.log('In User Signup', request.body)

    database.collection("docApptUserTable").insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

// ******** User Login ******** 
router.post("/login", (request, response) => {

    console.log('In User Login')
    database.collection("docApptUserTable").find({ "email": request.body.email, "password": request.body.password }).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});

// ******** Fetch User Info using email ******** 
router.post("/getUserInfo", (request, response) => {

    console.log('In User getUserInfo')
    database.collection("docApptUserTable").find({ "email": request.body.email }).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});


module.exports = router;

//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/