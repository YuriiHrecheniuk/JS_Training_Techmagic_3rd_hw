import updateObjectInArray from "./modules/updateObjectInArray";

interface IPerson {
  name: string,
  age: number,
}

const testArr: IPerson[] = [{
  name: 'Yurii',
  age: 18,
}, {
  name: 'Kyrylo',
  age: 26,
}]
console.log('testArr', testArr);
console.log('Test with no matches', updateObjectInArray<IPerson>(testArr,
  1,
  {name: 'Kyry', age: 26},
  {name: 'Vasyl'}))

console.log('Test with matches', updateObjectInArray(testArr,
  1,
  {name: 'Kyrylo', age: 26},
  {name: 'Vasyl'}))