import express from 'express';
import dotenv from 'dotenv';

import sequelize from './models/db.js';
import Pelicula from './models/model_peliculas.js';

dotenv.config();

const app = express();

app.use(express.json());


// CONEXIÓN A POSTGRESQL

try {

  await sequelize.authenticate();

  console.log('Conexión exitosa con PostgreSQL');

  await sequelize.sync();

  console.log('Tablas sincronizadas');

} catch (error) {

  console.error('Error de conexión:', error);

}


// ------------------- CRUD -------------------


// OBTENER TODAS LAS PELÍCULAS

app.get('/peliculas', async (req, res) => {

  const peliculas = await Pelicula.findAll();

  res.json(peliculas);

});


// OBTENER POR ID

app.get('/peliculas/:id', async (req, res) => {

  const pelicula = await Pelicula.findByPk(req.params.id);

  if (pelicula) {

    res.json(pelicula);

  } else {

    res.status(404).json({
      error: 'Película no encontrada'
    });

  }

});


// CREAR PELÍCULA

app.post('/peliculas', async (req, res) => {

  const nueva = await Pelicula.create(req.body);

  res.status(201).json(nueva);

});


// ACTUALIZAR

app.put('/peliculas/:id', async (req, res) => {

  const pelicula = await Pelicula.findByPk(req.params.id);

  if (pelicula) {

    await pelicula.update(req.body);

    res.json(pelicula);

  } else {

    res.status(404).json({
      error: 'Película no encontrada'
    });

  }

});


// ELIMINAR

app.delete('/peliculas/:id', async (req, res) => {

  const eliminado = await Pelicula.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json({
    eliminado: !!eliminado
  });

});


// RUTA PRINCIPAL

app.get('/', (req, res) => {

  res.send('API de Películas funcionando');

});


// PUERTO

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Servidor ejecutándose en puerto ${PORT}`);

});