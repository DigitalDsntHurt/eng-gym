// Add any extra import statements you may need here


// Add any helper functions you may need here


function rotationalCipher(input, rotationFactor) {
  // edge cases
  if (typeof input !== 'string') { return null; }
  if (input.length === 0 || rotationFactor === 0) { return input; }

  // dictionaries
  //const letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //const numbers = '01234567890123456789';

  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let rotatedString = '';

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    let rotatedChar;

    if (letters.indexOf(currentChar) !== -1) {
      if (letters.indexOf(currentChar) + rotationFactor > letters.length - 1) {
        rotatedChar = letters[letters.indexOf(currentChar) + rotationFactor - letters.length]
      } else {
        rotatedChar = letters[letters.indexOf(currentChar) + rotationFactor];
      }
    } else if (caps.indexOf(currentChar) !== -1) {
      if (caps.indexOf(currentChar) + rotationFactor > caps.length - 1) {
        rotatedChar = caps[caps.indexOf(currentChar) + rotationFactor - caps.length]
      } else {
        rotatedChar = caps[caps.indexOf(currentChar) + rotationFactor];
      }
    } else if (numbers.indexOf(currentChar) !== -1) {
      if (numbers.indexOf(currentChar) + rotationFactor > numbers.length - 1) {
        rotatedChar = numbers[numbers.indexOf(currentChar) + rotationFactor - numbers.length]
      } else {
        rotatedChar = numbers[numbers.indexOf(currentChar) + rotationFactor];
      }
    } else {
      rotatedChar = currentChar;
    }

    rotatedString += rotatedChar;
  }
  return rotatedString;
}










// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

// Add your own test cases here
