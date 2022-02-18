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
    } catch(error:any){
        res.status(500).send(error.message)
    }
}