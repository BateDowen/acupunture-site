import NodeMailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config()
console.log( process.env.ABV_EMAIL);
export const transporter = NodeMailer.createTransport({
    host: "smtp.abv.bg",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.ABV_EMAIL,
      pass: process.env.ABV_PASS,
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
 export async function sendEmail(clientInfo) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.ABV_EMAIL, // sender address
      to: process.env.ABV_EMAIL, // list of receivers
      subject: "Запазен час", // Subject line
      text: `${clientInfo}`, // plain text body
    //   html: "<b>Hello world?</b>", // html body
    });
}
// sendEmail().catch(console.error);