//install the afrcastalking library from npmjs.org
const Africastalking = require('africastalking');

const AT = Africastalking({
    username: 'osteenomega',
    apiKey: 'd0403e073ec62ae709356c9fc60a5bd6ba9eb6bd793f0863bba66a7f4d8b65cd',
}).SMS;

const sendSMS = async () => {
    const output = await AT.send({
        to: ['+254795727383'],
        message: 'tuma kitu',
        enqueue: true,
    })

    console.log({ output });
};

sendSMS();


