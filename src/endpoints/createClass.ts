import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Turma } from "../classes/class"

export const createClass = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { nome, docentes, estudantes, module } = req.body
        const id = Date.now().toString()

        const newClass = new Turma (id, nome, docentes, estudantes, module)

        await connection('Turma')
        .insert({
            id: newClass.getId(),
            nome: newClass.getNome(),
            docentes: newClass.getDocente(),
            estudantes: newClass.getEstudates(),
            modulo: newClass.getModulo()
        })

        res.status(201).send({ message: "Turma criada com sucesso!"})
    } catch(err: any) {
        res.status(errorCode).send({message: err.message || err.sqlmessage})
    }
 } 