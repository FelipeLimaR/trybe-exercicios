const sum = require('./sum.js');


describe('Testes', () => {
    
    test('1 - Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    test('2 - Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    test('3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
        expect(() => { sum(4, '5') }).toThrow();
    })
    test('este se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() =>{sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    })
});