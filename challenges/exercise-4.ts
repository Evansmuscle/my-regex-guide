const text =
  "I'm going to work on Tuesday, on Sunday i stay at home, i mostly just work on Saturday as well";

// const nonWorkingRegex = /\b.*day\b/gi;
const regex = /\b([mtwfs][a-z]{1,4}[nsir]day)\b/gi;
const alternateRegex =
  /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/gi;
const textReplaced = text.replace(alternateRegex, 'Monday');

console.log(textReplaced);

export {};
