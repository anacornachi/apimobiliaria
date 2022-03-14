import sequelize from '../db/connection.js';
import {v4 as uuidv4} from 'uuid';
import RealEstate from '../models/RealEstate.model.js';

export default (app) => {
  app.get('/realestate', async (req, res) => {
    const data = await RealEstate.findAll();
    res.json({status: 200, data: data});
  });

  app.post('/realestate', async (req, res) => {
    const {
      name,
      id,
      email,
      city,
      cnpj,
      properties,
      broker,
      initialProperties,
      initialBroker,
      userId,
    } = req.body;

    const imobiliaria = {
      name: name,
      email: email,
      city: city,
      cnpj: cnpj,
      properties: properties,
      broker: broker,
      initialProperties: initialProperties,
      initialBroker: initialBroker,
      userId: uuidv4(),
    };
    await RealEstate.create(imobiliaria);
    res.json({status: 200});
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
