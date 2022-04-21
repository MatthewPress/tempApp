const promptsync = require ("prompt-sync")()

var tempprompt = promptsync ("Give me a word.")
while (tempprompt != "quit"){
  var tempprompt = promptsync ("Give me a word.")
}
