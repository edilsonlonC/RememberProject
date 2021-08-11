export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      userName: {
        type: Sequelize.STRING,
        unique: true,
      },
      blocked: {
        type: Sequelize.BOOLEAN,
      },
      password: {
        type: Sequelize.STRING(512),
      },
      resetTokenPassword: {
        type: Sequelize.STRING(512),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
