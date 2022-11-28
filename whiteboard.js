"use strict"

// string from snake case to camel case

// "apple_core" => "appleCore"
// "hello_world" => "helloWord"

// loop thru the characters
// for loop with index
// if "_", replace that with the next character capitalized
// return the word

function snakeToCamel(str) {
  let camelWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      camelWord += str[i+1].toUpperCase();
      i++;
      continue;
    }
    camelWord += str[i];
  }

  return camelWord;
}
