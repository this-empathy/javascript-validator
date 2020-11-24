import validator from '../../src';

describe('CAR Plate', () => {
  test('Validates CAR Plate', () => {
    const valid = [
      'MHD-6918',
      'KCU-6473',
      'NET-5886',
      'HOP-3D78',
      'JJJ-7V66',
      'MER-1C26',
      'CAS3S22',
      'FBI0D52',
      'CAS-3S22'
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

    valid.forEach(value => expect(validator.carPlate({ name: 'carPlate', value }).valid).toBeTruthy());
    invalid.forEach(value =>expect(validator.carPlate({ name: 'carPlate', value}).valid).toBeFalsy());
  });
});
