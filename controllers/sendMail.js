const nodemailer = require('nodemailer');
const sendMail= async(req,res)=>{
  let testAccount=await nodemailer.createTestAccount();
  let transporter=await nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
        user: 'isabell84@ethereal.email',
        pass: '18vWGBR6SUEfVKxd3U'
    
    }
  })
  let info=await transporter.sendMail({
    from:'"shivam Rawat" <shivam@gmail.com>',
    to:"shivamrawat5310@gmail.com",
    subject:"Hello shivam",
    text:"Hello Shivam Rawat",
    html:"<b>Hello dear !</b>"

  })
  console.log("Message sent: %s",info.messageId);
  res.send(info);
}
module.exports=sendMail;