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
    
    async changeTClass(checkId: string, newId:string): Promise<void> {
        try{
            const result = await connection()
            .select('*')
            .from('Docente')

            result.map(async (res:any):Promise<void> =>{
                 if(checkId === res.id){
                    await connection.raw(`
                    UPDATE  Docente SET class_id = '${newId}' WHERE id = '${checkId}'
                    `)
                 }
               
            } )

            

        } catch (error:any){
            return error.message
        }
    }
    
}

const checkId = async (id:string): Promise<any> =>{
    const checkId = await connection()
    .select('id')
    .from('Docente')
    .where('id', id)
        return checkId[0].id
}
