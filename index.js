const { ResourceLoader } = require("jsdom")

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]


  // use the .map method on the tutorials to return a new array
  const titleCased = () => {
    return tutorials.map(function(string){
      return string.split(" ").map(word => word[0].toUpperCase() + word.substr(1)).join(" ")
    })
 
}
