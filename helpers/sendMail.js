import nodemailer from "nodemailer";
import "dotenv/config";

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, //25, 465, 2525
  secure: true,
  auth: {
    user: "kateryna.val@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "hodepo8116@wermink.com",
//   from: "kateryna.val@meta.ua",
//   subject: "Test my email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>",
// };

const sendMail = async (data) => {
  await transport.sendMail({ ...data, from: "kateryna.val@meta.ua" });
  // .then(() => console.log("Email send success"))
  // .catch((error) => console.log(error.message));
  return true;
};

export default sendMail;
