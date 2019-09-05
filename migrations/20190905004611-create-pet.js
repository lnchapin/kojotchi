'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      evoScore: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      foodScore: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      hygineScore: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      lastFood: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      lastHygine: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      lastAttention: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      attentionScore: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      type: {
        type: Sequelize.STRING
      },
      died: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',		// NOTE: this is the table name
          key: 'id',
          as: 'user_id'
        },
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pets');
  }
};
