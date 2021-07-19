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
    let symbols = [];
    let letters = [];
    let letter = [];

    for(let i = 0; i< expr.toString().length; i += 10 ) {
        symbols.push(expr.toString().slice(i, i + 10));
    }

    for(let i = 0; i < symbols.length; i++ ) {
        if(symbols[i] == '**********') letter.push(' ');
        
        for(let j = 0; j < symbols[i].length; j += 2 ) {
            if(symbols[i].slice(j, j + 2) == 00) letter.push('');
            if(symbols[i].slice(j, j + 2) == 10) letter.push('.');
            if(symbols[i].slice(j, j + 2) == 11) letter.push('-');
        }
        letters.push(letter);
        letter = [];
    }

    for(let i = 0; i < letters.length; i++ ) {
        letters[i] = letters[i].join('');
    }

    for(let i = 0; i < letters.length; i++ ) {
        for(let key in MORSE_TABLE) {
            if(key == letters[i]) letters[i] = MORSE_TABLE[letters[i]] ;
        }
    }

    return letters.join('');
}

module.exports = {
    decode
}