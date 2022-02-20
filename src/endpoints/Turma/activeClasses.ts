import { Request, Response } from "express";
import { ClassDataBase} from '../../data/classDataBase'
import { Turma} from '../../classes/classClass'

export const getActiveClass = async (req: Request, resp: Response):Promise<any> => {

    let errorCode = 400
    try {
        const teamData = new ClassDataBase()
        const results: Turma[] = await teamData.get_activeTeams()

        resp.status(200).send(results[0])
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}