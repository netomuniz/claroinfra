module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regional', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nm_regional: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uf_id: {
        type: Sequelize.INTEGER,
        references: { model: 'uf', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('regional');
  }
};
