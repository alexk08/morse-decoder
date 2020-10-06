const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = expr.split('');
  let newArr = [];
  for (let i = 0; i < arr.length/10; i++) {
    const element = arr.slice(10*i, 10*i+10).join('');
    newArr.push(element);
  }
  let decodeArr = [];
  for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    let str ='';
    if (element !== '**********') {
      for (let j = element.length-1; j>=0; j-=2) {
        const element1 = element.slice(j-1,j+1);
        if (element1 === '11') {
          str = '-' + str;
        } else if (element1 === '10') {
          str = '.' + str;
        } else {
          str = '' + str;
        }
      }
      decodeArr.push(str);
    } else {
      decodeArr.push(' ');
    }
  }

  let result = '';
  for (let i = 0; i < decodeArr.length; i++) {
    const element = decodeArr[i];
    if (element !== ' ') {
      result = result + MORSE_TABLE[element]
    } else {
      result = result + element;
    }
  }
  return result;
}

module.exports = {
    decode
}
