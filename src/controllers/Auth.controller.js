import User from '../models/User.model.js';
import {decrypt} from '../utils/encrypt.utils.js';
import {jwt} from '../utils/token.utils.js';

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

export const AuthController = {
  signIn,
};
