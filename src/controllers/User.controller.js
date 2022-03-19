const User = require('../models/User.model.js');
const {encrypt, decrypt} = require('../utils/encrypt.utils.js');
const jwt = require('../utils/token.utils.js');

const getUser = async (req, res) => {
  const decoded = jwt.decode(req);
  const data = await User.findByPk(decoded.id);
  const {password, ...user} = data.dataValues;
  return res.json(user);
};

const register = async (req, res) => {
  const userExists = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (userExists) {
    return res.status(400).json({
      message: 'User already exists',
    });
  } else {
    const createdUser = await User.create({
      ...req.body,
      password: await encrypt(req.body.password),
    });

    const {password, ...user} = createdUser;

    const {firstName, email, id, role} = user.dataValues;

    const payload = {id: id, role: role};
    const token = jwt.encode(payload);

    return res.json({firstName, email, token});
  }
};

module.exports = userController = {
  getUser,
  register,
};
