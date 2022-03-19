const User = require('../models/User.model.js');
const {decrypt} = require('../utils/encrypt.utils.js');
const {jwt} = require('../utils/token.utils.js');

const signIn = async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {
    const passwordMatch = await decrypt(password, user.dataValues.password);

    if (passwordMatch) {
      const {password, ...userWithoutPassword} = user.dataValues;
      const payload = {id: user.dataValues.id};
      const token = jwt.encode(payload);

      return res.status(200).json({user: userWithoutPassword, token});
    } else {
      return res.status(400).json("Password don't match");
    }
  } else {
    return res.status(400).json("User doesn't exist");
  }
};

module.exports = AuthController = {
  signIn,
};
