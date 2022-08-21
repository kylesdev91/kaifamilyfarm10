const nodemailer = require('nodemailer');
const { SmsClient } = require('@azure/communication-sms');

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
        console.log('Sent: ' + info.response);
        // smsClient.send({
        //     from: "+18444021959",
        //     to: ["+14699106366", "+14695250450", "+19043927442", "+14695341938"],
        //     // to: ["+14699106366", "+14057610896"],
        //     message: "Order from  " + req.body.emailAddress + "... " + req.body.orderTotal
        // });
    }
  });
};
