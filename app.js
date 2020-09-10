const accountSid = 'AC64c86e6bdceff5c5d787471c470561e2';
const authToken = '29542829f728fbd36e8a62ed1efd3056';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'eat lar？',
     from: '+12025199222',
     to: '+16692319598'
   })
  .then(message => console.log(message.sid))
  .catch(e => console.log(e))