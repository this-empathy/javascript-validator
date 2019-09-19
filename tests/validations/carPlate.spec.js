import validator from '../../index.js';

describe('CAR Plate', () => {
  test('Validates CAR Plate', () => {
    const valid = [
      'MHD-6918',
      'KCU-6473',
      'NET-5886',
      'HOP-3D78',
      'JJJ-7V66',
      'MER-1C26'
    ];

    const invalid = [
      'MHD-',
      'KCU-647A',
      '@#T-5886',
      'H2P-3D78',
      '7V66',
      'MER',
      'HWP-3@78',
      'HWP-A478'
    ];

    valid.forEach(value => expect(validator.carPlate('carPlate', value).valid).toBeTruthy());
    invalid.forEach(value =>expect(validator.carPlate('carPlate', value).valid).toBeFalsy());
  });
});
