const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')
const Users = require("../users/users-model.js");

//register a chef!
///api/auth/register
router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken(saved);
      console.log('token', saved);
      res.status(201).json({ message: `Welcome ${saved.username}!`, token });
    })
    .catch(error => {
      console.log('add user');
      res.status(500).json(error);
    });
});

//chef login
//api/auth/login
router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
  
          res.status(200).json({
            message: `Welcome ${user.username}!, I have a token`,
            token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
    })
      .catch(error => {
        res.status(500).json(error);
    });
});

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      // department: user.department
    };
  
    const options = {
      expiresIn: "4d"
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;