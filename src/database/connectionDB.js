import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'postgres', // Tipo de base de datos que estás utilizando (puede ser mysql, postgres, sqlite, etc.)
    host: 'localhost', // Dirección del servidor de la base de datos
    username: 'postgres', // Nombre de usuario para la base de datos
    password: '0000', // Contraseña para la base de datos
    database: 'Tinder_proy' // Nombre de la base de datos
  });
  
export {
    sequelize
}