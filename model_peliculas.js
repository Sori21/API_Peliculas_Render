import db from './db.js';
import { DataTypes } from 'sequelize';

const Pelicula = db.define('Pelicula', {

  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },

  genero: {
    type: DataTypes.STRING
  },

  estreno: {
    type: DataTypes.INTEGER
  },

  horario: {
    type: DataTypes.FLOAT
  }

});

export default Pelicula;