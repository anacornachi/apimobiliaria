export function up(queryInterface, Sequelize) {
  const UsersTable = queryInterface.createTable('Users', {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    properties: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    broker_amounts: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  });

  return UsersTable;
}
export function down(queryInterface) {
  return queryInterface.dropTable('Users');
}
