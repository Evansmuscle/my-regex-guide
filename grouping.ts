const regex = /([a-d][1-5]){5}/;

const data = '2018-3-9';
const dateRegex = /^(?:\d{4})([-./])(\d{1,2})\1(d{1,2})$/;
const arr = dateRegex.exec(data);

const lookAheadGroupRegex =
  /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[\/\*-\+\,\:\;\.\t\n\!\'\^\#\$\%\½\&\{\\\[\]\}\(\)\=\?]).*$/;

console.log(arr);

export {};
