/*
Using the provided array, create a seccond array that only
includes the numbers with the 801 area code. (The area code
is the first 3 numbers.)
And check if they are valid numbers
*/

let phoneNums2 = [
  '801-766-9754',
  '801-545-5454',
  '435-666-1212',
  '801-796-8010',
  '435-555-9801',
  '801-009-0909',
  '435-222-8013',
  '801-777-6655',
  '801-A43-4654',
];

const regexPhone = /801-\d{3}-\d{4}/;
const newPhoneNums3 = phoneNums2.filter((number: string) => {
  return number.match(regexPhone);
});
console.log(newPhoneNums3);

export {};
