const realEstateController = require('../RealEstate.controller');

test('getAll returns all data', async () => {
  const teste = get('/realestate');
  console.log({teste});
});
