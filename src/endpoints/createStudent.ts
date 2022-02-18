import { Request, Response } from 'express';
import { Student, User } from '../classes/studentClass';
import { connection } from '../data/connection';

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let { name, email, birthDate, team_id, hobby } = req.body;
    const id = Date.now().toString();

    if (!name || !email || !birthDate || !team_id) {
      res.statusCode = 422;
      throw new Error('Preencha todos os campos');
    }

    const newStudent = new User(id, name, email, birthDate, team_id);
    birthDate = birthDate.split('/').reverse().join('/');
    await connection('labesystem_students').insert({
      id: newStudent.getId(),
      name: newStudent.getName(),
      email: newStudent.getEmail(),
      birthDate: newStudent.getBirthDate(),
      team_id: newStudent.getTeamId(),
    });
    // const hobbies = newStudent.getHobby();
    // const hobbyId = (): string => {
    //   return Date.now().toString();
    // };
    // const studentHobbyId = (): string => {
    //   return Date.now().toString();
    // };

    // for (let hobby of hobbies) {
    //   const id = hobbyId();

    //   await connection('labenusystem_Hobby').insert({
    //     id: id,
    //     name: hobby,
    //   });

    //   await connection('labenusystem_studentHobby').insert({
    //     id: studentHobbyId(),
    //     student_id: newStudent.getId(),
    //     hobby_id: id,
    //   });
    // }
    res.status(200).send('Novo estudante criado com sucesso');
  } catch (error: any) {
    if (res.statusCode === 400) {
      res.status(500).send('Algum erro aconteceu, tente novamente!');
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};
