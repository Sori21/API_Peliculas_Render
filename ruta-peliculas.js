import express from 'express'
import service from '../services/serv-peliculas.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await service.getPeliculas()
  res.send(data)
})

router.get('/:id', async (req, res) => {
  const data = await service.getPelicula(req.params.id)
  res.send(data)
})

router.post('/', async (req, res) => {
  const data = await service.createPelicula(req.body)
  res.send(data)
})

router.put('/:id', async (req, res) => {
  const data = await service.updatePelicula(req.params.id, req.body)
  res.send(data)
})

router.delete('/:id', async (req, res) => {
  const data = await service.deletePelicula(req.params.id)
  res.send(data)
})

export default router