// cadena_inversa.test.js
const cadena_inversa = require('./cadena_inversa');

test('invierte la cadena "hola" a "aloh"', () => {
  expect(cadena_inversa('hola')).toBe('aloh');
});

test('invierte cadena vacía a cadena vacía', () => {
  expect(cadena_inversa('')).toBe('');
});

test('invierte cadena con espacios "abc def" a "fed cba"', () => {
  expect(cadena_inversa('abc def')).toBe('fed cba');
});

