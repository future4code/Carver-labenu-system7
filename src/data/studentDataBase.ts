import { Student } from '../classes/studentClass';
import { connection } from './Connection/connection';

export class StudentDataBase {
  async createNewStudent(student: Student) {
    await connection.raw(`
      INSERT INTO Estudante (id, name, email, birthDate, team_id)
      VALUES
          ("${student.getId()}", "${student.getNome()}", "${student.getEmail()}", 
           "${student.getDataNasc()}", "${student.getTurmaId()}");
  `);

    const hobbies = student.getHobby();

    const hobbyId = (): string => {
      return Date.now().toString();
    };

    const studentHobbyId = (): string => {
      return Date.now().toString();
    };

    for (let hobby of hobbies) {
      await connection.raw(`
          INSERT INTO Hobby (id, name)
          VALUES
              ("${hobbyId()}", "${hobby}");
      `);

      await connection.raw(`
          INSERT INTO Estudante_Hobby (id, student_id, hobby_id)
          VALUES
              ("${studentHobbyId()}", "${student.getId()}", "${hobbyId()}");
      `);
    }
  }

  async getStudentByName(name: string): Promise<Student[]> {
    const results: Student[] = await connection.raw(`
      SELECT * FROM Estudante WHERE name LIKE "%${name}%";
  `);
    return results;
  }

  async getStudentsId(): Promise<any> {
    const results: Student[] = await connection.raw(`
        SELECT id FROM Estudante;
    `);
    return results;
  }

  async changeStudentFromTeam(id: string, team_id: string) {
    await connection.raw(`
        UPDATE Estudante SET team_id = "${team_id}" WHERE id = "${id}";
    `);
  }
}
