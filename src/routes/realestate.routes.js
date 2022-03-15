import RealEstate from '../models/RealEstate.model.js';
import {encrypt} from '../utils/encrypt.js';
import {jwt} from '../utils/token.js';

export default (app) => {
  app.get('/realestate', async (req, res) => {
    const data = await RealEstate.findAll();
    res.status(200).json({data: data});
  });

  app.get('/realestate/:cnpj', async (req, res) => {
    const {cnpj} = req.params;

    const realEstate = await RealEstate.findOne({
      where: {
        cnpj: cnpj,
      },
    });

    if (realEstate) {
      const {password, ...data} = realEstate.dataValues;
      res.status(200).json({data});
    } else {
      res.status(404).json({message: 'Real Estate not found'});
    }
  });

  app.post('/register/realestate', async (req, res) => {
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
      const {password, ...data} = req.body;
      const encodedPassword = await encrypt(password);
      const createdRealEstate = await RealEstate.create({
        password: encodedPassword,
        ...data,
      });

      const payload = {
        id: createdRealEstate.dataValues.id,
        role: createdRealEstate.dataValues.role,
      };
      const token = jwt.encode(payload);

      const {name, cnpj, adminCpf, adminName} = createdRealEstate.dataValues;

      res.json({
        realestate: {name, cnpj},
        administrator: {
          adminCpf,
          adminName,
        },
        token,
      });
    }
  });

  app.put('/realestate/:cnpj', async (req, res) => {
    const {cnpj} = req.params;
    const data = req.body;

    const realEstate = await RealEstate.findOne({
      where: {
        cnpj: cnpj,
      },
    });

    if (realEstate) {
      const updatedData = await RealEstate.update(data, {where: {cnpj: cnpj}});
      res.status(200).json({status: 'Update completed successfully'});
    } else {
      res.status(400).json({message: 'Real Estate not found'});
    }
  });

  app.patch('/realestate/:cnpj', async (req, res) => {
    const {cnpj} = req.params;
    const data = req.body;

    const updatedData = await RealEstate.update(data, {where: {cnpj: cnpj}});
    res.status(200).json({status: 'Update completed successfully'});
  });

  app.delete('/realestate/:cnpj', async (req, res) => {
    const {cnpj} = req.params;

    await RealEstate.destroy({where: {cnpj: cnpj}});
    res.status(200).json({status: 'delete!'});
  });
};
