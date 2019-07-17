module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('perfil', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nm_perfil: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('perfil');
  }
};

