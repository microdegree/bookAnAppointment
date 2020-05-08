var express = require('express');
var router = express.Router();




// ******** Add New Project ******** 
router.post("/addProject", (request, response) => {

    console.log('Update Info  ', request.body.email);
    console.log('Update Info  ', request.body);


    database.collection("docApptDoctorInfoTable").update({ "email": request.body.email },
        request.body,
        { upsert: true },
        (error, result) => {

            //console.log('result ', result)
            console.log('result object id ', result.objectId)
            response.send(result);
            console.log('err : ', error)

        })

});

// ******** Fetch My created projects ******** 
router.post("/getMyProjects", (request, response) => {

    console.log('In getMyProjects', request.body)
    database.collection("docApptDoctorInfoTable").find(request.body).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});

router.post("/modifyProject", (request, response) => {
    console.log('In Admin controller modifyProject', request.body)
    database.collection("docApptDoctorInfoTable").replaceOne({ 'email': request.body.email }, request.body, (error, result) => {
        if (error) {
            console.log(error)

            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

// ******** Fetch All My Bookings ******** 
router.post("/getMyBookings", (request, response) => {

    console.log('In getMyProjects', request.body)
    database.collection("docApptBookingTable").find(request.body).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});

//Upload Project Logo by Admin
var multer = require('multer')
let uploadedFileName
var storage = multer.diskStorage(
    {
        destination: './backend/uploads/',
        filename: function (req, file, cb) {
            //req.body is empty...
            //How could I get the new_file_name property sent from client here?
            uploadedFileName = Date.now() + '-' + file.originalname
            cb(null, uploadedFileName);
        }
    }
);
var upload = multer({ storage: storage });


router.post('/uploadProjectImage', upload.single('avatar'), function (request, response) {
    console.log('upload Image controller')
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any

    try {
        console.log('uploadedFileName ', uploadedFileName)
        response.send({ 'uploadedFileName': uploadedFileName });
    } catch (err) {
        response.send(400);
    }

})

module.exports = router;