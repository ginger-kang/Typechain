class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const kang = new Human("kang", 20, "male");

const sayHi = (person: Human): string => {
  return `Hi ${person.name}, age: ${person.age}, gender: ${person.gender}!`;
};

console.log(sayHi(kang));

export {};
