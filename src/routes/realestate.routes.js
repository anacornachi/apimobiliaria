import sequelize from '../db/connection.js';
import {v4 as uuidv4} from 'uuid';
import RealEstate from '../models/RealEstate.model.js';
import User from '../models/User.model.js';
import {jwt} from '../utils/token.js';

export default (app) => {
  app.get('/realestate', async (req, res) => {
    const data = await RealEstate.findAll();
    res.json({status: 200, data: data});
  });

  app.post('/realestate', async (req, res) => {
    const realEstateExists = await RealEstate.findOne({
      where: {
        cnpj: req.body.cnpj,
      },
    });

    if (realEstateExists) {
      return res.status(400).json({
        message: 'Real Estate already exists',
      });
    } else {
      const admin = await User.findOne({
        where: {
          cpf: req.body.adminCpf,
        },
      });

      const {id, firstName, lastName, cpf} = admin.dataValues;
      const {adminCpf, ...realEstate} = req.body;

      const createdRealEstate = await RealEstate.create({
        ...realEstate,
        adminId: adminCpf,
      });

      const payload = {
        id: createdRealEstate.dataValues.id,
        userId: id,
      };
      const token = jwt.encode(payload);

      const {name, cnpj} = createdRealEstate.dataValues;

      res.json({
        realestate: {name, cnpj},
        administrator: {
          firstName,
          lastName,
          cpf,
        },
        token,
      });
    }

    // se puder cadastrar -> vincular o user id ao usuario cpf cadastrado como role imobiliaria
  });

  app.put('/realestate', (req, res) => {
    res.json({status: 'put!'});
  });

  app.patch('/realestate', (req, res) => {
    res.json({status: 'patch!'});
  });

  app.delete('/realestate', (req, res) => {
    res.json({status: 'delete!'});
  });
};

// # imobiliaria
// get -> todas as imobiliarias que tenho no banco
// get -> de uma imobiliaria só com um parametro /:id
// post -> criacao de imobiliaria (dados do form)
// update -> atualizar dados da imobiliaria
// delete -> deletar a conta (com parametro /:id)
