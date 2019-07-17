module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mercado', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nm_mercado: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('mercado');
  }
};
