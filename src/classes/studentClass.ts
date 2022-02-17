export abstract class User {
  protected id: string;
  protected name: string;
  protected email: string;
  protected birth_date: string;
  protected team_id: string;

  constructor(
    id: string,
    name: string,
    email: string,
    birth_date: string,
    team_id: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birth_date = birth_date;
    this.team_id = team_id;
  }

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getBirthDate(): string {
    return this.birth_date;
  }
  public getTeamId(): string {
    return this.team_id;
  }
}
export class Student extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    birth_date: string,
    team_id: string,
    protected hobby: string[]
  ) {
    super(id, name, email, birth_date, team_id);
  }

  public getHobby(): string[] {
    return this.hobby;
  }
}
