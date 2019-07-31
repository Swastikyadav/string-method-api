[
  {
    "method":"String.prototype.concat()",
    "syntax":"let str1 = 'Hello'",
    "syntax1":"let str2 = 'World'",
    "syntax2":"str1.concat(' ', str2) // 'Hello World'",
    "parameter":"Strings to concatenate",
    "return":"A new string with combined text of provided strings.",
    "summary":"concat() method combines two or more strings into one string."
  },
  {
    "method":"String.prototype.substring()",
    "syntax":"let str = 'JsMethods'",
    "syntax1":"str.substring(0, 2);",
    "syntax2":" // 'Js'",
    "parameter":"Start index and End index.",
    "return":"A new string with specified part of provided string.",
    "summary":"substring() method takes out a part from the provided string."
  },
  {
    "method":"String.prototype.toString()",
    "syntax":"let num = 123;",
    "syntax1":"num.toString();",
    "syntax2":" // '123'",
    "parameter":"Does not takes any parameter.",
    "return":"A string representing a specified object.",
    "summary":"toString() method converts any data type into string. Type conversion."
  },
  {
    "method":"String.prototype.includes()",
    "syntax":"let str = 'How are you?';",
    "syntax1":"str.includes('are')",
    "syntax2":"// true",
    "parameter":"String to be searched, position(where to begin search - optional)",
    "return":"Boolean (true / false)",
    "summary":"includes() method search for a specified string inside a given string."
  },
  {
    "method":"String.prototype.split()",
    "syntax":"let str = 'Hello World'",
    "syntax1":"str.split(' ')",
    "syntax2":"// ['Hello', 'World']",
    "parameter":"seperator(optional) and limit(optional)",
    "return":"An Array of strings.",
    "summary":"split() method splits the string from the specified operator."
  },
  {
    "method":"String.prototype.endsWith()",
    "syntax":"const str1 = 'Cats are the best!';",
    "syntax1":"console.log(str1.endsWith('best', 17));",
    "syntax2":"// expected output: true",
    "parameter":"Search stirng and length (optional)",
    "return":"Boolean. true if the given characters are found at the end of the string; otherwise, false.",
    "summary":"The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate."
  },
  {
    "method":"String.prototype.indexOf()",
    "syntax":"var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';",
    "syntax1":"var searchTerm = 'dog';",
    "syntax2":"var indexOfFirst = paragraph.indexOf(searchTerm);",
    "parameter":"Search value - A string representing the value to search for, from index",
    "return":"The index of the first occurrence of searchValue, or -1 if not found.",
    "summary":"The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex."
  },
  {
    "method":"String.prototype.repeat()",
    "syntax":"var chorus = 'Because I\'m happy. ';",
    "syntax1":"console.log('Chorus lyrics for 'Happy': ' + chorus.repeat(2));",
    "syntax2":"// expected output: 'Chorus lyrics for 'Happy': Because I'm happy. Because I'm happy",
    "parameter":"Count - indicating the number of times to repeat the string in the newly-created string that is to be returned.",
    "return":"A new string containing the specified number of copies of the given string.",
    "summary":"The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together."
  },
  {
    "method":"String.prototype.slice()",
    "syntax":"var str = 'The quick brown fox jumps over the lazy dog.';",
    "syntax1":"console.log(str.slice(31));",
    "syntax2":"// expected output: 'the lazy dog.'",
    "parameter":"beginIndex, endIndex (optional)",
    "return":"A new string containing the extracted section of the string.",
    "summary":"The slice() method extracts a section of a string and returns it as a new string, without modifying the original string."
  },
  {
    "method":"String.prototype.toLowerCase()",
    "syntax":"var sentence = 'The quick brown fox jumps over the lazy dog.';",
    "syntax1":"console.log(sentence.toLowerCase());",
    "syntax2":"// expected output: 'the quick brown fox jumps over the lazy dog.'",
    "parameter":"Does not takes any parameter.",
    "return":"A new string representing the calling string converted to lower case.",
    "summary":"The toLowerCase() method returns the calling string value converted to lower case."
  },
  {
    "method":"String.prototype.toUpperCase()",
    "syntax":"var sentence = 'The quick brown fox jumps over the lazy dog.';",
    "syntax1":"console.log(sentence.toUpperCase());",
    "syntax2":"// expected output: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'",
    "parameter":"Does not takes any parameter.",
    "return":"A new string representing the calling string converted to upper case.",
    "summary":"The toUpperCase() method returns the calling string value converted to upper case."
  },
  {
    "method":"String.prototype.trim()",
    "syntax":"var greeting = '   Hello world!   ';",
    "syntax1":"console.log(greeting.trim());",
    "syntax2":"// expected output: 'Hello world!';",
    "parameter":"Does not takes any parameter.",
    "return":"A new string representing the calling string stripped of whitespace from both ends.",
    "summary":"The trim() method removes whitespace from both ends of a string."
  }
]

