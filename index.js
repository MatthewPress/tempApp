const promptsync = require ("prompt-sync")()

/** var name = promptsync ("What's your name? ")
var greeting = ("Sup" + " " + name)
console.log (greeting) */

// First prompt User sees when entering the app
var tempprompt = promptsync ("What temperature do you have? (c/f/k)")

// Loop if User inputs an unrecognized character
while (tempprompt != "c" && tempprompt != "f" && tempprompt != "k"){
  var tempprompt = promptsync ("Please enter 'c' 'f' or 'k'")
}

// User has Celsius
if (tempprompt == "c") {
  var tempprompt = promptsync ("What tempature would you like to convert to? (f/k)")

  while (tempprompt != "f" && tempprompt != "k"){
    var tempprompt = promptsync ("Please enter 'f' or 'k'")
  }

    // User wants to convert Celsius to Fahrenheit
    if (tempprompt == "f") {
      var tempValue = promptsync ("What Celsius temperature would you like to convert to Fahrenheit?")
      var c = parseInt (tempValue)
      var f = c * 9/5 + 32
      console.log (f)}

    // User wants to convert Celsius to Kelvin
    else if (tempprompt == "k") {
      var tempValue = promptsync ("What Celsius temperature would you like to convert to Kelvin?")
      var c = parseInt (tempValue)
      var k = c + 273.15
      console.log (k)}

    // User entered unrecognized character when asked what temperature they wanted to convert to
    else {
      console.log ("Please enter 'f' / 'k'")
    }
}

// User has Fahrenheit
else if (tempprompt == "f") {
  var tempprompt = promptsync ("What tempature would you like to convert to? (c/k)")
  while (tempprompt != "c" && tempprompt != "k"){
    var tempprompt = promptsync ("Please enter 'c' or 'k'")
  }
    if (tempprompt == "c") {
      var tempValue = promptsync ("What Fahrenheit temperature would you like to convert to Celsius?")
      var f = parseInt (tempValue)
      var c = (f - 32) * 5/9
      console.log (c)}
    else if (tempprompt == "k") {
      var tempValue = promptsync ("What Fahrenheit temperature would you like to convert to Kelvin?")
      var f = parseInt (tempValue)
      var k = (f - 32) * 5/9 + 273.15
      console.log (k)}
    else {
      console.log ("Please enter 'c' / 'k'")
    }
}

// User has Kelvin
else if (tempprompt == "k") {
  var tempprompt = promptsync ("What tempature would you like to convert to? (c/f)")
  while (tempprompt != "c" && tempprompt != "f"){
    var tempprompt = promptsync ("Please enter 'c' or 'f'")
  }
    if (tempprompt == "c") {
      var tempValue = promptsync ("What Kelvin temperature would you like to convert to Celsius?")
      var k = parseInt (tempValue)
      var c = k - 273.15
      console.log (c)}
    else if (tempprompt == "f") {
      var tempValue = promptsync ("What Kelvin temperature would you like to convert to Fahrenheit?")
      var k = parseInt (tempValue)
      var f = (k - 273.15) * 9/5 + 32
      console.log (f)}
    else {
      console.log ("Please enter 'c' / 'f'")
    }
}

// User entered unrecognized character when asked what temperature they had
else {
  console.log ("Please enter 'c' / 'f' / 'k'")
}
