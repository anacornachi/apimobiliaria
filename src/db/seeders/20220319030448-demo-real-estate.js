'use strict';

const {v4: uuidv4} = require('uuid');
const {encrypt} = require('../../utils/encrypt.utils');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('realEstates', [
      {
        id: uuidv4(),
        city: 'RJ',
        cnpj: '36209900000190',
        email: 'imobiliaria@email.com',
        name: 'Imobiliária Casa Luz',
        properties: '0',
        initialProperties: '4',
        broker: '0',
        initialBroker: '3',
        adminCpf: '93498219073',
        adminName: 'Pedro',
        role: 'imobiliaria',
        password: await encrypt('THS7Xhdi'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        city: 'SP',
        cnpj: '57678305000174',
        email: 'imobicasa@email.com',
        name: 'Imobi Casa',
        properties: '0',
        initialProperties: '15',
        broker: '0',
        initialBroker: '10',
        adminCpf: '32139134052',
        adminName: 'Ana',
        role: 'imobiliaria',
        password: await encrypt('THS7Xhdi'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('realEstates', null, {});
  },
};
