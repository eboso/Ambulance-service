const Africastalking = require('africastalking');

const AT = Africastalking({
    username: 'osteenomega',
    apiKey: '0d0210f174f530adf0b1b614cc92b9e1c30751f4447b80cc2003d38abff24307',
}).MOBILE_MONEY;

const sendMoney = async (recipient, amount) => {
    const output = await AT.send({
        productName: 'osteenomega',
        recipients: [{
            phoneNumber: recipient,
            currencyCode: 'KES',
            amount: amount,
        }],
    })

    console.log({ output });
};

const recipients = [
    {
        phoneNumber: '+254795727383',
        amount: 1
    }
];

recipients.forEach(recipient => sendMoney(recipient.phoneNumber, recipient.amount));
