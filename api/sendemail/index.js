const nodemailer = require('nodemailer');
// const { SmsClient } = require('@azure/communication-sms');

module.exports = async function (context, req) {
//   const { DefaultAzureCredential } = require('@azure/identity');
//   const { SecretClient } = require('@azure/keyvault-secrets');
//   const credential = new DefaultAzureCredential();
//   const vaultName = 'kaifamilyfarm5KV';
//   const url = `https://${vaultName}.vault.azure.net`;
//   const client = new SecretClient(url, credential);
//   const userRetrievedSecret = await client.getSecret('username3');
//   const username3 = userRetrievedSecret.value;
//   const pwdRetrievedSecret = await client.getSecret('password3');
//   const password3 = pwdRetrievedSecret.value;

  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.USR3,
      pass: process.env.PWD3,
    },
  });

  // const smsClient = new SmsClient('endpoint=https://kffsmscs.communication.azure.com/;accesskey=zM9uliUzojQ+GFjq6/Hewxe82vaLXsFPodOE3im6/wr1AggXC9+SiMYGufTOKM+bKDNYcj3OGXKYJ+FqdyewJA==');
  
  const mailOptions = {
    from: 'kaifamilyfarm123@outlook.com',
    // from: 'kylehernandez12@outlook.com',
    // to: 'eands9@yahoo.com',
    // from: 'kaifamilyfarm@yahoo.com',
    // to: 'kaifamilyfarm@yahoo.com',
    to: 'kaifamilyfarm123@outlook.com',
    // from: 'kylehernandez12@outlook.com',
    // to: 'erichernandez134@outlook.com',
    subject:
      'Order From ' + req.body.emailAddress + ' - ' + req.body.emailSubject,
    text: req.body.emailBody,
    html:
      '<div><table><th><tr><th>Name</th><th>Quantity</th></tr></thead><tbody>' +
      req.body.emailBody +
      '<tr><td></td><td style="text-align:right; font-weight: bold;"><p></p>' +
      req.body.orderTotal +
      '</td></tr></tbody></table></div>',
  };

  try {
    await transporter.sendMail(mailOptions);
    // console.log('Message sent: %s', response);
          
  } catch (error) {
    console.log('****error =' + error);
    context.res = {
      status: 900,
      // body: "Please pass a videoId on the query string or in the request body"
    };
  }
}