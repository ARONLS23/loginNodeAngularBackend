import { Sequelize } from "sequelize";

const sequelize = new Sequelize ('producto', 'root', 'aron',{
    
    host: 'localhost',
    dialect: 'mysql'

});

export default sequelize;
