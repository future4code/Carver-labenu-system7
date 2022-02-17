import { Request, Response } from 'express';
import { StudentDataBase } from '../data/studentDataBase';
import { Student } from '../classes/studentclass';

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, birth_date, team_id, hobbies } = req.body;
    const id = Date.now().toString();

    if (!name || !email || !birth_date || !team_id || !hobbies) {
      res.statusCode = 422;
      throw new Error('Preencha todos os campos');
    }

    const studentDB = new StudentDataBase();

    const newStudent = new Student(
      id,
      name,
      email,
      birth_date,
      team_id,
      hobbies
    );

    await studentDB.create(newStudent);

    res.status(200).send('Novo estudante criado com sucesso');
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send('Algum erro aconteceu, tente novamente!');
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};
