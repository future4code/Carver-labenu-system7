import { Connection } from '../data/connection';
import { Student } from '../classes/studentclass';

export class StudentDataBase extends Connection {
  async create(student: Student) {
    await StudentDataBase.connection('labenusystem_students').insert({
      id: student.getId(),
      name: student.getName(),
      email: student.getEmail(),
      birth_date: student.getBirthDate(),
      team_id: student.getTeamId(),
    });

    const hobby = student.getHobby();

    const hobbyId = (): string => {
      return Date.now().toString();
    };
    const studentHobbyId = (): string => {
      return Date.now().toString();
    };

    for (let hob of hobby) {
      const id = hobbyId();

      await StudentDataBase.connection('labenusystem_Hobby').insert({
        id: id,
        name: hob,
      });

      await StudentDataBase.connection('labenusystem_studentHobby').insert({
        id: studentHobbyId(),
        student_id: student.getId(),
        hobby_id: id,
      });

      return student;
    }
  }
  async changeStudentFromClass(id: string, team_id: string) {
    await StudentDataBase.connection('labenusystem_students')
      .update({
        team_id: team_id,
      })
      .where('id', '=', id);
  }
}
