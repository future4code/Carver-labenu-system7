import { Request, Response } from 'express';
import { Student } from '../classes/studentClass';
import { StudentDataBase } from '../data/studentDataBase';

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    let { nome, email, data_nasc, turma_id, hobbies } = req.body;
    const id = Date.now().toString();
    data_nasc = data_nasc.split('/').reverse().join('-');

    if (!nome || !email || !data_nasc || !turma_id || !hobbies) {
      res.statusCode = 422;
      throw new Error('Preencha todos os campos');
    }

    const newStudent = new StudentDataBase();
    const studentData: Student = new Student(
      id,
      nome,
      email,
      data_nasc,
      turma_id,
      hobbies
    );
    await newStudent.createNewStudent(studentData);

    res.status(200).send('Novo estudante criado com sucesso');
  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
