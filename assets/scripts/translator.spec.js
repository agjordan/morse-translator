// import {translateEnglishToMorse, translateMorseToEnglish, JSON_MORSE} from './translator.js'

const { translateEnglishToMorse,  translateMorseToEnglish, JSON_MORSE } = require("./translator.js")

describe('translateEnglishToMorse(string)', () => {
    it('should translate uppercase letters', () => {
        expect(translateEnglishToMorse('A', JSON_MORSE)).toEqual('.-');
        expect(translateEnglishToMorse('G', JSON_MORSE)).toEqual('--.');
        expect(translateEnglishToMorse('Q', JSON_MORSE)).toEqual('--.-');
    }),

    it('should translate uppercase words', () => {
        expect(translateEnglishToMorse('JIMMY', JSON_MORSE)).toEqual('.--- .. -- -- -.--');
        expect(translateEnglishToMorse('ALEX', JSON_MORSE)).toEqual('.- .-.. . -..-');
    }),

    it('should translate uppercase sentences', () => {
        expect(translateEnglishToMorse('ALEX JORDAN', JSON_MORSE)).toEqual('.- .-.. . -..-  .--- --- .-. -.. .- -.');
        expect(translateEnglishToMorse('JRR TOLKIEN', JSON_MORSE)).toEqual('.--- .-. .-.  - --- .-.. -.- .. . -.');
    }),

    it('should translate lowercase letters', () => {
        expect(translateEnglishToMorse('n', JSON_MORSE)).toEqual('-.');
        expect(translateEnglishToMorse('o', JSON_MORSE)).toEqual('---');
        expect(translateEnglishToMorse('e', JSON_MORSE)).toEqual('.');
    }),

    it('should translate lowercase words', () => {
        expect(translateEnglishToMorse('flora', JSON_MORSE, JSON_MORSE, JSON_MORSE)).toEqual('..-. .-.. --- .-. .-');
        expect(translateEnglishToMorse('reading', JSON_MORSE, JSON_MORSE, JSON_MORSE)).toEqual('.-. . .- -.. .. -. --.');
    }),

    it('should translate lowercase sentences', () => {
        expect(translateEnglishToMorse('test morse', JSON_MORSE, JSON_MORSE)).toEqual('- . ... -  -- --- .-. ... .');
        expect(translateEnglishToMorse('english is easy', JSON_MORSE, JSON_MORSE)).toEqual('. -. --. .-.. .. ... ....  .. ...  . .- ... -.--');
    })

    it('should ignore strings with unsupported chars', () => {
        expect(translateEnglishToMorse('^^()£morse', JSON_MORSE, JSON_MORSE)).toEqual('Invalid character(s) found');
        expect(translateEnglishToMorse('en()*lish is easy', JSON_MORSE, JSON_MORSE)).toEqual('Invalid character(s) found');
    })


})

describe('translateMorseToEnglish(string)', () => {
    it('should translate morse character to uppercase english letters', () => {
        expect(translateMorseToEnglish('.---', JSON_MORSE)).toEqual('J');
        expect(translateMorseToEnglish('--..', JSON_MORSE)).toEqual('Z');
        expect(translateMorseToEnglish('--', JSON_MORSE)).toEqual('M');
    }),

    it('should translate morse words to uppercase english words', () => {
        expect(translateMorseToEnglish('.--- .- -- . ...', JSON_MORSE)).toEqual('JAMES');
        expect(translateMorseToEnglish('--.. --- .-.. -', JSON_MORSE)).toEqual('ZOLT');
    }),

    it('should translate morse sentences to uppercase english sentences', () => {
        expect(translateMorseToEnglish('--.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-', JSON_MORSE)).toEqual('QUICK BROWN FOX');
        expect(translateMorseToEnglish('--.. --- .-.. -', JSON_MORSE)).toEqual('ZOLT');
    }),

    it('should ignore morse strings with unsupported patterns', () => {
        expect(translateMorseToEnglish('$$', JSON_MORSE)).toEqual('Invalid character(s) found');
        expect(translateMorseToEnglish('..--..--', JSON_MORSE)).toEqual('Invalid character(s) found');
        expect(translateMorseToEnglish('Alex is a friend', JSON_MORSE)).toEqual('Invalid character(s) found');
    })
})