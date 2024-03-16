import NodeMailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config()
export const transporter = NodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_APP_PASS,
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
 export async function sendEmail(clientInfo) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.MAIL_EMAIL, // sender address
      to: process.env.MAIL_EMAIL, // list of receivers
      subject: "Запазен час", // Subject line
      text: `${clientInfo}`, // plain text body
    //   html: "<b>Hello world?</b>", // html body
    });
}
// sendEmail().catch(console.error);