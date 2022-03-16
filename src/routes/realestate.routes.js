import {realEstateController} from '../controllers/RealEstate.controller.js';
import updateSchema from '../middlewares/validators/updateSchema.validator.js';

export const RealEstateRoutes = (app) => {
  app.get('/realestate', realEstateController.getAll);

  app.get('/realestate/:cnpj', realEstateController.getByCNPJ);

  app.post('/register/realestate', realEstateController.create);

  app.put('/realestate/:cnpj', updateSchema, realEstateController.fullUpdate);

  app.patch('/realestate/:cnpj', realEstateController.partialUpdate);

  app.delete('/realestate/:cnpj', realEstateController.deleteByCnpj);
};
