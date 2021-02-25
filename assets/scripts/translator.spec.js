import {translateEnglishToCode, translateCodeToEnglish, JSON_MORSE} from './translator.js'

// const { translateEnglishToCode,  translateCodeToEnglish, JSON_MORSE } = require("./translator.js")

describe('translateEnglishToCode(string)', () => {
    it('should translate uppercase letters', () => {
        expect(translateEnglishToCode('A', JSON_MORSE)).toEqual('.-');
        expect(translateEnglishToCode('G', JSON_MORSE)).toEqual('--.');
        expect(translateEnglishToCode('Q', JSON_MORSE)).toEqual('--.-');
    }),

    it('should translate uppercase words', () => {
        expect(translateEnglishToCode('JIMMY', JSON_MORSE)).toEqual('.--- .. -- -- -.--');
        expect(translateEnglishToCode('ALEX', JSON_MORSE)).toEqual('.- .-.. . -..-');
    }),

    it('should translate uppercase sentences', () => {
        expect(translateEnglishToCode('ALEX JORDAN', JSON_MORSE)).toEqual('.- .-.. . -..-  .--- --- .-. -.. .- -.');
        expect(translateEnglishToCode('JRR TOLKIEN', JSON_MORSE)).toEqual('.--- .-. .-.  - --- .-.. -.- .. . -.');
    }),

    it('should translate lowercase letters', () => {
        expect(translateEnglishToCode('n', JSON_MORSE)).toEqual('-.');
        expect(translateEnglishToCode('o', JSON_MORSE)).toEqual('---');
        expect(translateEnglishToCode('e', JSON_MORSE)).toEqual('.');
    }),

    it('should translate lowercase words', () => {
        expect(translateEnglishToCode('flora', JSON_MORSE, JSON_MORSE, JSON_MORSE)).toEqual('..-. .-.. --- .-. .-');
        expect(translateEnglishToCode('reading', JSON_MORSE, JSON_MORSE, JSON_MORSE)).toEqual('.-. . .- -.. .. -. --.');
    }),

    it('should translate lowercase sentences', () => {
        expect(translateEnglishToCode('test morse', JSON_MORSE, JSON_MORSE)).toEqual('- . ... -  -- --- .-. ... .');
        expect(translateEnglishToCode('english is easy', JSON_MORSE, JSON_MORSE)).toEqual('. -. --. .-.. .. ... ....  .. ...  . .- ... -.--');
    })

    it('should ignore strings with unsupported chars', () => {
        expect(translateEnglishToCode('^^()£morse', JSON_MORSE, JSON_MORSE)).toEqual('Invalid character(s) found');
        expect(translateEnglishToCode('en()*lish is easy', JSON_MORSE, JSON_MORSE)).toEqual('Invalid character(s) found');
    })


})

describe('translateCodeToEnglish(string)', () => {
    it('should translate morse character to uppercase english letters', () => {
        expect(translateCodeToEnglish('.---', JSON_MORSE)).toEqual('J');
        expect(translateCodeToEnglish('--..', JSON_MORSE)).toEqual('Z');
        expect(translateCodeToEnglish('--', JSON_MORSE)).toEqual('M');
    }),

    it('should translate morse words to uppercase english words', () => {
        expect(translateCodeToEnglish('.--- .- -- . ...', JSON_MORSE)).toEqual('JAMES');
        expect(translateCodeToEnglish('--.. --- .-.. -', JSON_MORSE)).toEqual('ZOLT');
    }),

    it('should translate morse sentences to uppercase english sentences', () => {
        expect(translateCodeToEnglish('--.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-', JSON_MORSE)).toEqual('QUICK BROWN FOX');
        expect(translateCodeToEnglish('--.. --- .-.. -', JSON_MORSE)).toEqual('ZOLT');
    }),

    it('should ignore morse strings with unsupported patterns', () => {
        expect(translateCodeToEnglish('$$', JSON_MORSE)).toEqual('Invalid character(s) found');
        expect(translateCodeToEnglish('..--..--', JSON_MORSE)).toEqual('Invalid character(s) found');
        expect(translateCodeToEnglish('Alex is a friend', JSON_MORSE)).toEqual('Invalid character(s) found');
    })
})