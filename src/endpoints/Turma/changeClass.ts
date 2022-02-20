import { Request, Response } from "express";
import { ClassDataBase } from "../../data/classDataBase";


export const changeClass = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try {
        const id: string = req.params.id
        const module: string = req.body.module

        if (!id || !module){
            errorCode = 422
            throw new Error('Este modulo não existe')
        }

       
        const classData = new ClassDataBase()
        await classData.chance_module(id, module)


        resp.status(200).send("Novo modulo da turma alterado com sucesso")
    } catch ( error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}