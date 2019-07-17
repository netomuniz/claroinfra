module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_criacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_alteracao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_exclusao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      uf_id: {
        type: Sequelize.INTEGER,
        references: { model: 'uf', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      regional_id: {
        type: Sequelize.INTEGER,
        references: { model: 'regional', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      gestor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'usuario', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      mercado_id: {
        type: Sequelize.INTEGER,
        references: { model: 'mercado', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      perfil_id: {
        type: Sequelize.INTEGER,
        references: { model: 'perfil', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('usuario');
  }
};
