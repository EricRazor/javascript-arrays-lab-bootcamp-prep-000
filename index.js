const app = "I don't do much.";


window.kittens = ["Milo","otis","Garfield"];


function destructivelyAppendKitten(epiphany){
  kittens.push(epiphany);
  window.kittens;
}

function destructivelyPrependKitten(epiphanyAgain){
  kittens.unshift(epiphanyAgain);
  window.kittens;
}

function destructivelyRemoveLastKitten(kitty){
  kittens.pop(kitty);
  window.kittens;
}

function destructivelyRemoveFirstKitten(firstKitteh){
  kittens.shift(firstKitteh);
  window.kittens;
}

function appendKitten(kitty){
  var newArray = kittens.unshift(kitty)
  return newArray
  
}