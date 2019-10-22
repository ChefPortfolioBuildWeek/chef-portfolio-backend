const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets'); 


module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('inside middleware')
  if(token) {
    //check that token is valid
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
        //foul play
        console.log(err)
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        //token is good
        req.user = {username: decodedToken.username};
        
        next();
      }
    })
  } else {
    res.status(400).json({ message: "no credentials provided" })
  }
};  
