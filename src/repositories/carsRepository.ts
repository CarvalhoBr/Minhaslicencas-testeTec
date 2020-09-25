import db from '../database/connection'
import { Car } from '../models/Car'

export function findAll(){
    return(db('carros'))
}

export function findCarsByYear(search: number){

    return db('carros')
    .where('ano', '=', Number(search))

}

export function findCarsByBrandOrModel(search: string){
    
    return db('carros')
    .where('marca', '~*', String(search))
    .orWhere('veiculo', '~*', String(search))

}

export function findCarById(id: number){

    return db('carros')
    .where('id', '=', id)
}

export function createCar(carro: Car){
    return db("carros")
    .insert(carro)
    .returning('id')
}

export function updateCar(id: number, carro: Car){
    return db('carros')
        .update(carro)
        .where('id', '=', Number(id))
        .returning('*')
}

export function removeCar(id: number){
    return db('carros')
        .delete('*')
        .where('id', '=', id)
}