// EXAMPLE 1 - Remove Special Characters from a String

const str = 'hello 123 !@#$%^WORLD?.';

const noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(noSpecialCharacters); // 👉️ 'hello 123 WORLD'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the `\w` special character to shorten the regex

// const str = 'hello 123 !@#$%^WORLD?._';

// const noSpecialCharacters = str.replace(/[^\w ]/g, '');
// console.log(noSpecialCharacters); // 👉️ 'hello 123 WORLD_'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Excluding characters from being removed

// const str = 'hello 123 !@#$%^WORLD?._';

// const noSpecialCharacters = str.replace(/[^\w @]/g, '');
// console.log(noSpecialCharacters); // 👉️ 'hello 123 @WORLD_'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Not keeping digits in the result

// const str = 'hello 123 !@#$%^WORLD?.';

// const noSpecialCharacters = str.replace(/[^a-zA-Z ]/g, '');
// console.dir(noSpecialCharacters); // 👉️ 'hello  WORLD'

// ------------------------------------------------------------------

// // EXAMPLE 5 - Specifying the characters we want to remove

// const str = 'hello 123 !@#$%^WORLD?.{}<>';

// const noSpecialCharacters = str.replace(
//   /[@!^&\/\\#,+()$~%.'":*?<>{}]/g,
//   '',
// );

// console.log(noSpecialCharacters); // 👉️ "hello 123 WORLD"
