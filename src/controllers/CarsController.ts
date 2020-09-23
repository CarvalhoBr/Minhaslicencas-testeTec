import {Request, response, Response} from 'express'
import db from '../database/connection'
import * as yup from 'yup'

export async function read(req: Request, res: Response){

    db('carros')
    .then((carros) => res.json(carros))
    .catch(err => res.status(500).json({ERROR: "Não foi possível processar sua solicitação"}))

} 

export function find(req: Request, res: Response){
    
    const search = String(req.query.search)
    const searchSchema = yup.string().required()

    return searchSchema
    .validate(search)
    .then(() => {
        if(Number(search)){
            db('carros')
            .where('ano', '=', Number(search))
            .then((carros) => {
                
                if(carros.length !== 0){
                    return res.json(carros)
                }

            })
            .catch(err => res.status(500).json({ ERROR: "Não foi possível processar sua solicitação" }))
        }

        db('carros')
        .where('marca', '~*', String(search))
        .orWhere('veiculo', '~*', String(search))
        .then((carros) => res.json(carros))
        .catch(err => res.status(500).json({ ERROR: "Não foi possível processar sua solicitação" }))
    })
    .catch(err => res.status(400).json({ERROR: "Insira um valor válido na busca"}))    
} 

export function readById(req: Request, res: Response){
    
    const id = Number(req.params.id)
    const idSchema = yup.number().required()

    return idSchema
    .validate({ id })
    .then(() => {
        db('carros')
        .where('id', '=', id)
        .then((selected) => {
            return res.json(selected)
        })
        .catch(err => res.status(500).json({ERROR: "Não foi possível processar sua solicitação"}))
    })
    .catch(err => res.status(400).json({ERROR: err.message}))
} 

export function create(req: Request, res: Response){
    
    const carro = req.body

    const carSchema = yup.object().shape({
        veiculo: yup.string().required(),
        marca: yup.string().required(),
        ano: yup.number().required(),
        descricao: yup.string(),
        vendido: yup.boolean().default(false)
    }).noUnknown()
    
    return carSchema
    .validate(carro, { stripUnknown: false })
    .then(() =>
        db("carros")
            .insert(carro)
            .returning('id')
            .then((id) => res.status(201).json({"Carro cadastrado com sucesso": {id}}))
            .catch((err) =>
                res.status(500).json({ error: "Ocorreu um erro ao inserir o dado" })
            )
    ).catch((error) => res.status(400).json(error));

} 

export function update(req: Request, res: Response){
    const carro = req.body
    const id = Number(req.params.id)

    const carSchema = yup.object().shape({
        veiculo: yup.string().required(),
        marca: yup.string().required(),
        ano: yup.number().required(),
        descricao: yup.string(),
        vendido: yup.boolean().default(false)
    }).noUnknown()

    const idSchema = yup.number().required()

    return idSchema
    .validate(id)
    .then(() => {
        return carSchema
        .validate(carro)
        .then(() => {
        db('carros')
            .update(carro)
            .where('id', '=', Number(id))
            .returning('*')
            .then(modified => res.json(modified))
            .catch(err => res.status(500).json(err.message))
        })
        .catch(err => res.status(400).json({ERROR: err.message}))
    })
    .catch(err => res.status(400).json({ERROR: "Insira um id válido"}))

} 

export async function edit(req: Request, res: Response){
    const carro = req.body
    const id = Number(req.params.id)

    const carSchema = yup.object().shape({
        veiculo: yup.string(),
        marca: yup.string(),
        ano: yup.number(),
        descricao: yup.string(),
        vendido: yup.boolean().default(false)
    }).noUnknown()

    const idSchema = yup.number().required()

    return idSchema
    .validate(id)
    .then(() => {
        return carSchema
        .validate(carro)
        .then(() => {
        db('carros')
            .update(carro)
            .where('id', '=', Number(id))
            .returning('*')
            .then(modified => res.json(modified))
            .catch(err => res.status(500).json(err.message))
        })
        .catch(err => res.status(400).json({ERROR: err.message}))
    })
    .catch(err => res.status(400).json({ERROR: "Insira um id válido"}))

    
} 

export async function remove(req: Request, res: Response){
    const id = Number(req.params.id)

    const idSchema = yup.number().required()

    return idSchema
    .validate(id)
    .then(() => {
        db('carros')
            .delete('*')
            .where('id', '=', id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json({ ERROR: "Não foi possível processar sua solicitação" }))
    }).catch(err => res.status(400).json({ERROR: "Insira um id válido"}))

} 