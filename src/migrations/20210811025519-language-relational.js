export default {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('languages', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('languages', 'userId', {});
  },
};
