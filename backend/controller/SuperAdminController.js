var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

// ******** User Signup ******** 

router.post("/addUser", (request, response) => {
    console.log('In Super Admin controller addUser', request.body)

    database.collection("docApptUserTable").insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});



// ******** Fetch User Info using email ******** 
router.get("/getAllUsers", (request, response) => {

    console.log('In Super Admin controller getAllUsers')
    database.collection("docApptUserTable").find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});

router.post("/modifyUser", (request, response) => {
    console.log('In Super Admin controller modifyUser', request.body)
    var objectId = new ObjectId(request.body._id);
    delete request.body._id
    database.collection("docApptUserTable").replaceOne({ _id: objectId }, request.body, (error, result) => {
        if (error) {
            console.log(error)

            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

router.post("/deleteUser", (request, response) => {
    console.log('In Super Admin controller modifyUser', request.body)
    var objectId = new ObjectId(request.body._id);
    delete request.body._id
    database.collection("docApptUserTable").deleteOne({ _id: objectId }, (error, result) => {
        if (error) {
            console.log(error)

            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});


module.exports = router;

//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/