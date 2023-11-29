function GenerateOTP(){

    const otpLength = 6;



    return  Math.floor(Math.random() * Math.pow(10, otpLength)).toString().padStart(otpLength, '0');

}

module.exports = {
    GenerateOTP
}