const { error } = require("console");
const otpGenerator = require("../Miscellaneous/otp");
const db = require("../Model/otp.module");
const sendmail = require("../Miscellaneous/SendOTP");

function postData(req, res) {
  const email = req.body.email;
  const otp = otpGenerator.GenerateOTP();

  db.create({
    email: email,
    otp: otp,
    expiresAT: Date.now() + 300000,
  }).catch((error) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      sendmail.SendOTP(otp, email);
      res.json({
        email: email,
      });
    }
    // console.log("Error",error.message)
  });
}

module.exports = {
  postData,
};
