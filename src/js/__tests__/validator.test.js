const Validator = require('../validator.js');

test('Проверка на правильное имя', () => {
    const result = new Validator();
    expect(result.validateUsername('DD_88-gg')).toBeTruthy();
})

test('Проверка на имя не содержащее латинские буквы', () => {
    const result = new Validator();
    expect(() => {
        return result.validateUsername("Иван")
    }).toThrow();
})

test('Проверка на имя начинающееся на -', () => {
    const result = new Validator();
    expect(() => {
        return result.validateUsername("-DD_88-gg")
    }).toThrow();
})

test('Проверка на имя начинающееся на цифру', () => {
    const result = new Validator();
    expect(() => {
        return result.validateUsername("8DD_88-gg")
    }).toThrow();
})

test('Проверка на имя заканчивающеемя на цифру', () => {
    const result = new Validator();
    expect(() => {
        return result.validateUsername("DD_88-gg8")
    }).toThrow();
})

test('Проверка на имя содержащее больше 3 цифр', () => {
    const result = new Validator();
    expect(() => {
        return result.validateUsername("DD_8877-gg")
    }).toThrow();
})
