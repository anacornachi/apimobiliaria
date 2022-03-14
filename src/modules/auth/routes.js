import {jwt} from '../../utils/token.js';
import {decrypt, encrypt} from '../../utils/encrypt.js';
import authMiddleware from './index.js';
import User from '../../models/User.model.js';

const auth = authMiddleware();

export const authRoutes = (app) => {
  app.get('/user', auth.authenticate(), async (req, res) => {
    const decoded = jwt.decode(req);

    const data = await User.findByPk(decoded.id);
    const {password, ...user} = data.dataValues;
    res.json(user);
  });

  app.post('/register', async (req, res) => {
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

      const payload = {id: user.dataValues.id, role: user.dataValues.role};
      const token = jwt.encode(payload);

      const {firstName, email} = user.dataValues;

      res.json({firstName, email, token});
    }
  });

  app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      const passwordMatch = await decrypt(password, user.dataValues.password);

      if (passwordMatch) {
        const {password, ...userWithoutPassword} = user.dataValues;
        const payload = {id: user.dataValues.id};
        const token = jwt.encode(payload);

        res.json({user: userWithoutPassword, token});
      } else {
        res.status(400);
        res.json("Password don't match");
      }
    } else {
      res.status(400);
      res.json("User doesn't exist");
    }
  });
};
