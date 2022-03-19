const RealEstate = require('../models/RealEstate.model.js');
const {encrypt, decrypt} = require('../utils/encrypt.utils.js');
const jwt = require('../utils/token.utils.js');

const getAll = async (req, res) => {
  const data = await RealEstate.findAll();
  const noPasswordData = data.map((realestate) => {
    const {password, ...dataWithoutPassword} = realestate.dataValues;
    return dataWithoutPassword;
  });
  return res.status(200).json({data: noPasswordData});
};

const getByCNPJ = async (req, res) => {
  const {cnpj} = req.params;

  const realEstate = await RealEstate.findOne({
    where: {
      cnpj,
    },
  });

  if (realEstate) {
    const {password, ...data} = realEstate.dataValues;
    return res.status(200).json({data});
  } else {
    return res.status(404).json({message: 'Real Estate not found'});
  }
};

const create = async (req, res) => {
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

    const {id, role, name, cnpj, adminName} = createdRealEstate.dataValues;

    const payload = {
      id,
      role,
    };
    const token = jwt.encode(payload);

    return res.status(200).json({
      realestate: {name, cnpj},
      administrator: {
        name: adminName,
      },
      token,
    });
  }
};

const fullUpdate = async (req, res) => {
  const {cnpj} = req.params;
  const data = req.body;

  const realEstate = await RealEstate.findOne({
    where: {
      cnpj,
    },
  });

  if (realEstate) {
    await RealEstate.update(data, {where: {cnpj}});

    const {password, ...dataWithoutPassword} = data;
    return res.status(200).json({
      message: 'Full update completed successfully',
      data: dataWithoutPassword,
    });
  } else {
    return res.status(404).json({message: 'Real Estate not found'});
  }
};

const partialUpdate = async (req, res) => {
  const {cnpj} = req.params;
  const data = req.body;

  const realEstate = await RealEstate.findOne({
    where: {
      cnpj,
    },
  });

  if (realEstate) {
    await RealEstate.update(data, {where: {cnpj}});

    const {password, ...dataWithoutPassword} = data;

    return res.status(200).json({
      message: 'Partial update completed successfully',
      data: dataWithoutPassword,
    });
  } else {
    return res.status(404).json({message: 'Real Estate not found'});
  }
};

const deleteByCnpj = async (req, res) => {
  const {cnpj} = req.params;

  const realEstate = await RealEstate.findOne({
    where: {
      cnpj,
    },
  });

  if (realEstate) {
    await RealEstate.destroy({where: {cnpj}});
    return res.status(200).json({message: 'Successfully deleted'});
  } else {
    return res.status(404).json({message: 'Real Estate not found'});
  }
};

module.exports = realEstateController = {
  getAll,
  getByCNPJ,
  create,
  fullUpdate,
  partialUpdate,
  deleteByCnpj,
};
