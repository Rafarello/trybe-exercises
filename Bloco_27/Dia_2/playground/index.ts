interface People {
  name: string,
  familyName: string;
  height: number,
}

class MiddleEarthPeople implements People{
  private _name: string;
  private _familyName: string;
  public height: number;

  constructor(name: string, familyName: string, height: number) {
    this._name = name;
    this._familyName = familyName;
    this.height = height;
  }

  get name() {
    return `${this._name}`
  }

  set name(name: string) {
    this._name = name
  }

  get familyName() {
    return this._familyName;
  }
}

const rafael = new MiddleEarthPeople('Rafael', 'Moraes', 178);
rafael.name = 'Rocha'


function greet(person: People) {
  console.log(`Olá, ${person.name}`);

}

greet(rafael);