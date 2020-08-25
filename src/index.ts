const name = "kang";
const age = 20;
const gender = "male";

const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hi ${name}, age: ${age}, gender: ${gender}!`;
};

console.log(sayHi(name, age, gender));

export {};
