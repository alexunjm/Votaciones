export class Candidate {

  constructor(
    public name: string,
    public color: string,
    public image: string,
    public number: number
  ) { }
}

export class Category {

  constructor(
    public name: string,
    public candidates: Array<Candidate>
  ) {}
}
