var jwt = require('jsonwebtoken')

// Create and send token and save in the cookie.
const generateToken = (user, statusCode, res) => {

    // generate a token 
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_KEY, {
        expiresIn: '4000m'
    })

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + 1 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    // //save token into a cookie, the token expires after a day
    res.cookie("token", token, {
        httpOnly: true,   // To prevent access via JS
        secure: process.env.NODE_ENV === 'production',  // If using HTTPS
        expires: new Date(Date.now() + 3600000), // Set expiry (optional)
      });
      

    const { _id, name, email, phonenumber, deliveryaddress, role, createdAt, avatar } = user

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user: {
            _id,
            role,
            name,
            email,
            phonenumber,
            deliveryaddress,
            createdAt,
            avatar
        }
    })

}

module.exports = generateToken;