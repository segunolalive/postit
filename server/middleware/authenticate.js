import jwt from 'jsonwebtoken';
import db from '../models/index';

require('dotenv').config();

const invalidToken = db.invalidToken;
const secret = process.env.TOKEN_SECRET;
const authenticate = (req, res, next) => {
  const userToken = req.headers['x-access-token'];
  if (userToken) {
    jwt.verify(userToken, secret, (err) => {
      if (err) {
        res.json({ message: 'Token authentication failure' });
      } else {
        invalidToken.findOne({
          where: { token: userToken } })
        .then((token) => {
          if (token) {
            res.send({ message: 'You are not logged in' });
          } else {
            next();
          }
        })
        .catch((error) => {
          res.send(error);
        });
      }
    });
  } else {
    res.json({ message: 'No token provided' });
  }
};

module.exports = authenticate;
