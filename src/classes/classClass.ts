
export class Turma {
    constructor(
        private id: string, 
        private nome: string, 
        private docentes: string,
        private estudantes: string,
        private modulo: number
    ){}

    public getId(): string {
        return this.id 
    }

    public getNome(): string {
        return this.nome
    }

    public getDocente(): string {
        return this.docentes
    }

    public getEstudates(): string {
        return this.estudantes
    }

    public getModulo(): number {
        return this.modulo
    }
}