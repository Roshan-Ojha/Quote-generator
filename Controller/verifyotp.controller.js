const db = require("../Model/otp.module");

async function postOTP(req, res) {
  const otp = req.body.otp;
  const email = req.body.email;

  try {
    const matchedRecord = await db.findOne({ email }, {});

    if (!matchedRecord) {
      throw Error("Record didn't matched");
    }

    if (matchedRecord.expiresAT < Date.now()) {
      await db.deleteOne({ email });
      throw Error("OTP has expired. Request for new one");
    }

    if (matchedRecord.otp === otp) {
      //fiter,update,option
      await db.updateOne(
        {email},
        {
          $unset: { otp: "", expiresAT: "" },
          $set: { email: email, verified: true },
        }
      );
    } else {
      throw Error("OTP didn't matched. Try Again");
    }

    res.json({
      verified: matchedRecord ? true : false,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
}

module.exports = {
  postOTP,
};
