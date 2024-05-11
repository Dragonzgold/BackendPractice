const myName = 'Jesus';

const myAge = 2;

const suma = (num1: number, num2: number) => {
  return num1 + num2;
};

suma(1, 5);

class Persona {
  constructor(private age: number, private name: string) { }
  getSummary() {
    return `my name is ${this.name} and age is ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Jesus');
nicolas.getSummary();
