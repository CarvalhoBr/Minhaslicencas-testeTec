import express, { Request, Response } from 'express'
import * as carsController from './controllers/CarsController'

const routes = express.Router()

routes.get('/veiculos', carsController.read)
routes.get('/veiculos/find', carsController.find)
routes.get('/veiculos/:id', carsController.readById)

routes.post('/veiculos', carsController.create)

routes.put('/veiculos/:id', carsController.update)

routes.patch('/veiculos/:id', carsController.edit)

routes.delete('/veiculos/:id', carsController.remove)


export default routes