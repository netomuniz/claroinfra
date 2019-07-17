module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cidade', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nm_cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uf_id: {
        type: Sequelize.INTEGER,
        references: { model: 'uf', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('cidade');
  }
};
