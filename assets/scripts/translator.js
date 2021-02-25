export const JSON_MORSE = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": "",
    "\n": "\n",
    "\r": "\r",
    "↵": "↵",
    "ignore": " "
  }

export const translateEnglishToMorse = (string, dictionary) => {
    let charArr = string.split('')
    let dictKeys = Object.keys(dictionary)
    if (!charArr.every(char => dictKeys.includes(char.toUpperCase()))) return "Invalid character(s) found"
    return charArr.map(char => dictionary[char.toUpperCase()]).join(' ').trim()
}

export const translateMorseToEnglish = (string, dictionary) => {
    let charArr = string.split(' ')
    let dictVals = Object.values(dictionary)
    if (!charArr.every(char => dictVals.includes(char))) return "Invalid character(s) found"
    return charArr.map(char => getKeyByValue(dictionary, char)).join('').trim()
}

export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}