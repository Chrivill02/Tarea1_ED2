export class Persona{
    private name: string;
    private age: number;
    private city: string;

    constructor(){
        this.name = ""
        this.age = 0
        this.city = ""
    }

    public getName(): string {
      return this.name;
    }
    public setName(value: string) {
      this.name = value;
    }

    public getAge(): number {
      return this.age;
    }
    public setAge(value: number) {
      this.age = value;
    }

    public getCity(): string {
      return this.city;
    }
    public setCity(value: string) {
      this.city = value;
    }
}