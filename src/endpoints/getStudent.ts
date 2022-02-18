import { Request, Response } from 'express';
import { Student } from '../classes/studentClass';
import { StudentDataBase } from '../data/studentDataBase';

export const getStudent = async (
  req: Request,
  resp: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const nome: string = req.params.nome;

    const studentData = new StudentDataBase();
    const results: Student[] = await studentData.getStudentByName(nome);

    if (results.length === 0 || !nome) {
      errorCode = 404;
      throw new Error('Estudante não encontrado!');
    }

    resp.status(200).send(results[0]);
  } catch (error: any) {
    resp.status(errorCode).send(error.message || error.sqlMessage);
  }
};
