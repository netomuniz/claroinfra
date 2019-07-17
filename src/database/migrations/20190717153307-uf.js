module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('uf', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nm_uf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nm_uf_responsavel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('uf');
  }
};
