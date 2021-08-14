// ^ anchors the match to the start of the line
// $ anchors the match to the end of the line
// \b Word boundary -- Pattern bounded by a non-word character
// \B Nonword boundary -- Pattern bounded by a word character
// | operator means or in Regex, which makes you support alternate expressions

const regex = /^first.$/; // checks if there's only the word "first" in the text

export {};
