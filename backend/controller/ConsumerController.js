var express = require('express');
var router = express.Router();

// ******** Add New Booking for consumer ******** 

router.post("/addNewBooking", (request, response) => {

    console.log('addNewBooking ', request.body);
    database.collection("docApptBookingTable").insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }

        //Code to triiger email start 

        //Email Trigger Set Up instructions : 
        //>> run : cd backend ,
        // next run >> npm install nodemailer
        //Now create a mailtrap acct : https://mailtrap.io/
        //IN your mailtrap dashboard - click on Demo Inbox
        // copy your username & password and paste in below fields "user" , "pass"
        //now go and do the confirm booking . you should see a new mail in your mailtrack inbox
        //Reference : https://stackabuse.com/how-to-send-emails-with-node-js/

        const nodemailer = require('nodemailer');
        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'cea093122d37dd',
                pass: '0c417fdb9ca555'
            }
        });
        const message = {
            from: 'someone@gmail.com', // Sender address
            to: 'toaddress@gmail.com',         // List of recipients
            subject: 'Thanks fo rORdering', // Subject line
            text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
        };
        transport.sendMail(message, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
        //Code to triiger email end

        response.send(result.result);
    });
});



// ******** Fetch User Info using email ******** 
router.get("/getAllProjects", (request, response) => {

    console.log('In getAllProjects')
    database.collection("docApptDoctorInfoTable").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});



// ******** Payments ******** 
router.post("/secret", async (request, response) => {

    console.log('In Payment Gateway flow', request.body)

    // Set your secret key. Remember to switch to your live secret key in production!
    const stripe = require('stripe')('sk_test_aN2jTowZHzxgg6EHCSLjVJpY00YsxyoflH');

    const paymentIntent = await stripe.paymentIntents.create({
        amount: request.body.ammount,
        currency: 'inr',
        metadata: { integration_check: 'accept_a_payment' },
    });

    console.log('paymentIntent.client_secret ', paymentIntent.client_secret)
    response.json({ client_secret: paymentIntent.client_secret });

});



//COde for getMyOrders Page
var ObjectId1 = require('mongodb').ObjectId;
router.post("/getProductInfo", (request, response) => {
    console.log('getProductInfo ', request.body);
    database.collection("docApptDoctorInfoTable").find({ _id: new ObjectId1(request.body.productId) }).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});




module.exports = router;

//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/