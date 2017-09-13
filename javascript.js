// function hello(name) {
//   if name = "" {
//     var string = "Hello World";
//     return string;
//   } else {
//     var string = "hello" + name;
//     return string;
//   }
// }
//
//
//
// {
//
// }
// hello('Mustache');
//
//

// function madLib(name, subject){  //function name (paramaters)
//   var string = name + "'s favroite subject in school is " + subject + "."; //declare variable and set equal to
//   return string;
// };
//
// console.log(madLib('Patrick', 'art'));


// TipCalc
// function tipCalc(amount, level){
//   if(level === 'good'){
//     return amount * .2;
//   }else if(level === 'fair'){
//     return amount * .15;
//   }else if(level === 'bad')
//     return amount * .1
// }
//
// console.log(tipCalc(34, 'good'))


// function printSquare(num) {
//   for (var x = 1; x <= num; x++) {
//     var string = "";
//     for (var i = 0; i <= num; i++){
//       string += "*";
//     }
//     console.log(string);
//   }
// }
//
// printSquare(5)


//ceasar Cypher

function ceasarCipher(message, offset) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  var output = '';

  for(var i=0; i <message.length; i++){
    var letter = message[i];
    var position = alphabet.indexOf(letter); //position is an integer

    var newPosition = position - offset; // newPosition is a number

    var newLetter = alphabet[newPosition];

    output += newLetter
  }
  console.log(output);
}

ceasarCipher("hello", 2)
