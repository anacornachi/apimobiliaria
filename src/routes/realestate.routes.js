const realEstateController = require('../controllers/RealEstate.controller.js');
const updateSchema = require('../middlewares/validators/updateSchema.validator.js');

const RealEstateRoutes = (app) => {
  app.get('/realestate', realEstateController.getAll);

  app.get('/realestate/:cnpj', realEstateController.getByCNPJ);

  app.post('/register/realestate', realEstateController.create);

  app.put('/realestate/:cnpj', updateSchema, realEstateController.fullUpdate);

  app.patch('/realestate/:cnpj', realEstateController.partialUpdate);

  app.delete('/realestate/:cnpj', realEstateController.deleteByCnpj);
};

module.exports = RealEstateRoutes;
