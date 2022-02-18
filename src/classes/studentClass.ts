export class User {
  protected id: string;
  protected nome: string;
  protected email: string;
  protected data_nasc: string;
  protected turma_id: string;

  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
  }

  public getId(): string {
    return this.id;
  }
  public getNome(): string {
    return this.nome;
  }
  public getEmail(): string {
    return this.email;
  }
  public getDataNasc(): string {
    return this.data_nasc;
  }
  public getTurmaId(): string {
    return this.turma_id;
  }
}
export class Student extends User {
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    protected hobbies: string[]
  ) {
    super(id, nome, email, data_nasc, turma_id);
  }

  public getHobby(): string[] {
    return this.hobbies;
  }
}
