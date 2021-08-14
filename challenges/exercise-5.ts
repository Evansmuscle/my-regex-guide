let data = ['Jensen, Dale', 'Smith, Andrea', 'Jorgensen, Michael'];
const regex = /(\w+), (\w+)/i;

const newData = data.map((personName) => {
  let arr = regex.exec(personName);
  if (arr !== null) {
    return arr[2] + ' ' + arr[1];
  } else {
    return null;
  }
});

console.log(newData);

export {};
