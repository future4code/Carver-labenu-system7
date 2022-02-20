import {Request, Response} from 'express'
import { Teacher } from '../classes/teacherClass'
import { connection } from '../data/connection'

let errorCode = 0
export const createTeacher = async (req:Request, res:Response) =>{
    try{
        let {nome, email, data_nasc, turma_id} = req.body
        const id = Date.now().toString()
        data_nasc = data_nasc.split('/').reverse().join('-')
        
        const newTeacher = new Teacher(id, nome, email, data_nasc, turma_id)

        await connection('Docente')
        .insert({
            id: newTeacher.getId(),
            nome: newTeacher.getNome(),
            email: newTeacher.getEmail(),
            data_nasc: newTeacher.getDataNasc(),
            turma_id: newTeacher.getTurmaId()
        })
        if (!nome || !email || !data_nasc || !turma_id){
            errorCode = 422
            res.status(errorCode).send('Preencha todos os campos')
        }
        res.status(201).send('Professor registrado')
    } catch(error:any){
        res.status(500).send(error.message)
    }
}
