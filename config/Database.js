import {Sequelize} from "sequelize";

const db = new Sequelize('toko_db', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;