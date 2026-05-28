import Pelicula from '../models/model_peliculas.js'

async function getPeliculas() {
  return await Pelicula.findAll()
}

async function getPelicula(id) {
  return await Pelicula.findByPk(id)
}

async function createPelicula(data) {
  return await Pelicula.create(data)
}

async function updatePelicula(id, data) {
  const pelicula = await Pelicula.findByPk(id)
  if (!pelicula) return null
  return await pelicula.update(data)
}

async function deletePelicula(id) {
  const pelicula = await Pelicula.findByPk(id)
  if (!pelicula) return null
  return await pelicula.destroy()
}

export default {
  getPeliculas,
  getPelicula,
  createPelicula,
  updatePelicula,
  deletePelicula
}