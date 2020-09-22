import express, { Request, Response } from 'express'
import * as carsController from './controllers/CarsController'

const routes = express.Router()

routes.get('/veiculos', carsController.getCars)
routes.get('/veiculos/find', carsController.findCars)
routes.get('/veiculos/:id', carsController.getCarById)

routes.post('/veiculos', carsController.addCar)

routes.put('/veiculos/:id', carsController.updateAllInfo)

routes.patch('/veiculos/:id', carsController.update)

routes.delete('./veiculos/:id', carsController.destroy)

export default routes