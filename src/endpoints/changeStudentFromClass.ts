import { Request, Response } from 'express';
import { StudentDataBase } from '../data/studentDataBase';

export const changeStudentFromClass = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const team_id = req.body.team_id;

    if (!team_id) {
      res.statusCode = 422;
      throw new Error('O team_id é obrigatório!');
    }

    const StudentDB = new StudentDataBase();
    await StudentDB.changeStudentFromClass(id, team_id);

    res
      .status(200)
      .send('Alteração da turma do estudante realizada com sucesso!');
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send('Algum erro aconteceu, tente novamente!');
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};
