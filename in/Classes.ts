export class Animal {
  protected readonly animName: string;

  constructor(animName: string){
    this.animName = animName
  }

  makeSound(): void{
    console.log(`${this.name} is making sound`)
  }
}

class Dog extends Animal{

  makeSound(): void{
    console.log(`${this.name} wuuf Sound`)
  }
}

let wuffSound = new Dog('WuffDog')
wuffSound.makeSound()




// Create a Person class with properties name and age. Add a method greet that prints a greeting. Then create a subclass Student that overrides the greeting to say they are a student

export class PersonClass {
  protected readonly name: string;
  public readonly age?: number;

  constructor(name: string, age?: number){
    this.name = name;
    this.age = age;
  }

  greet(): void{
    console.log(`Hello ${this.name} your age is ${this.age}`)
  }
}

class Student extends PersonClass{
  
  greeting(): void{
    console.log(`they are student ${this.name}`)
  }
}

let newStudent = new Student('student', 20)
newStudent.greeting();