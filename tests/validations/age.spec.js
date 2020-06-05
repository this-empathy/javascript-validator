import validator from '../../src/index.js'

describe('Age', () => {

  test('Validar idades maior que o valor ', () => {
    validator.age('age', {
      value: 18,
      condition: '>=',
      age: 18
    })
  });
  // valid.forEach(value => expect(validator.carPlate('carPlate', value).valid).toBeTruthy());
});