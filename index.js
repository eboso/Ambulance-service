const express = require("express");
const Africastalking = require('africastalking');

const AT = Africastalking({
    username: 'osteenomega',
    apiKey: 'd0403e073ec62ae709356c9fc60a5bd6ba9eb6bd793f0863bba66a7f4d8b65cd',
}).SMS;

const app = express();


const sendSMS = async (msisdn, message) => {
    const output = await AT.send({
        to: ['+254795983399'],
        message: message,
        enqueue: true,
    })
return output
};

app.get("/", (request, response) => {
    output=sendSMS("+254795983399", "something is up")
    response.send(200,output);
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});