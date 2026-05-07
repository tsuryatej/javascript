console.log('js is working');

let age = 30;
console.log(age)

// const user = 'surya'
// user = 'tej'
// console.log(user)

const uName = 'john'
const fName = 'john doe'
console.log(`the username is ${uName} and the fullname is ${fName}`);

// length, properties and methods
const l = 'length of the word'
console.log(l.length)

// knowing the length of a string and convert the string into multiple formats 
const stringInfo = (str) => {
  const camel = str.toLowerCase().split(" ").map((w, i) => i === 0 ? w : `${w[0].toUpperCase()}${w.slice(1)}`).join("");
  console.log(`
    Original: ${str}
    Length: ${str.length}
    Uppercase: ${str.toUpperCase()}
    Lowercase: ${str.toLowerCase()}
    camel: ${camel}
    `);
}
stringInfo("hi this is my text")  ``