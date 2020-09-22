import {Request, Response} from 'express'
import db from '../database/connection'

export async function getCars(req: Request, res: Response){
    const cars = await db.select('*').from('carros')
    return res.json(cars);
} 

export function findCars(req: Request, res: Response){
    return res.json({ok: true})
} 

export function getCarById(req: Request, res: Response){
    return res.json({ok: true})
} 

export function addCar(req: Request, res: Response){
    return res.json({ok: true})
} 

export function updateAllInfo(req: Request, res: Response){
    return res.json({ok: true})
} 

export function update(req: Request, res: Response){
    return res.json({ok: true})
} 

export function destroy(req: Request, res: Response){
    return res.json({ok: true})
} 