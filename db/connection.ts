import { Sequelize } from "sequelize";

const db = new Sequelize('nodeDB', 'root', 'root', { 
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;