const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('ynov-fullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    });

sequelize.sync();
