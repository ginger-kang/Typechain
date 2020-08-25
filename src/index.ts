interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "kang",
  age: 20,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hi ${person.name}, age: ${person.age}, gender: ${person.gender}!`;
};

console.log(sayHi(person));

export {};
