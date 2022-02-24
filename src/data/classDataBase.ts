import { Turma } from "../classes/classClass";
import { ConnectionDataBase } from "./Connection/connectionDataBase";

export class ClassDataBase extends ConnectionDataBase  {

    async create_newTeam(team: Turma){
        await ConnectionDataBase .connection.raw(`
            INSERT INTO labesystem_team (id, name, module)
            VALUES
                ("${team.getId()}", "${team.getNome()}", "${team.getModulo()}");
        `)
    }

    async get_activeTeams(): Promise<Turma[]> {
        const results: Turma[] = await ConnectionDataBase.connection.raw(`
            SELECT * FROM labesystem_team WHERE module > "0";
        `)
        return results
    }

    async chance_module(id: string, module: string){
        await ConnectionDataBase .connection.raw(`
            UPDATE labesystem_team SET module = "${module}" WHERE id = "${id}";
        `)
    }
}