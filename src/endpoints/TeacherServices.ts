import {Request, Response} from 'express'
import { Teacher } from '../classes/teacherClass'
import { teacherDataBase } from '../data/teacherDatabase'


let errorCode = 0
export const getTeacher = async (req:Request,  res:Response): Promise<void> =>{
    try{
        const teacherData = new teacherDataBase()
        const result: Teacher[] = await teacherData.getTeacher()
        if(result.length === 0){
            errorCode = 404
            res.status(errorCode).send('Não há um corpo docente')
        }
        res.status(201).send(result[0])
    } catch(error:any){
        res.status(500).send(error.message)
    }
}

export const changeTClass = async (req:Request, res:Response): Promise<void> =>{
    try{
        const teacherData = new teacherDataBase()
        const {checkId, newId} = req.body
        await teacherData.changeTClass(checkId, newId)
        if(!checkId || !newId){
            errorCode = 401
            res.status(errorCode).send('Preencha com um id existente')
        }
        res.status(201).send('Professor transferido para a outra classe.')
    } catch(error:any){
        return error.message
    }
}
