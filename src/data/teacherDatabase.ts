import { connection } from "./connection"
import { Teacher } from "../classes/teacherClass"

export class teacherDataBase {
    async createTeacher(teacher: Teacher){
        await connection.raw(`
        INSERT INTO Docente (id, name, email, birthDate, team_id)
        VALUES ('${teacher.getId}', '${teacher.getNome}', '${teacher.getDataNasc}', '${teacher.getTurmaId}')
        `)
    }

    async getTeacher(): Promise<Teacher[]> {
        const result: Teacher[] = await connection()
        .select('*')
        .from('Docente')
        return result
    }
}
