const validateEntry = require('../src/validation/validateEntry');

describe('Validasi data entry dengan Joi', () => {
  test('Valid jika semua field benar', () => {
    const result = validateEntry({
      name: 'Maureen',
      email: 'maureen@example.com',
      comment: 'Ini komentar uji'
    });
    expect(result.error).toBeUndefined();
  });

  test('Invalid jika nama kosong', () => {
    const result = validateEntry({
      name: '',
      email: 'maureen@example.com',
      comment: 'Halo'
    });
    expect(result.error).toBeDefined();
  });

  test('Invalid jika email salah format', () => {
    const result = validateEntry({
      name: 'Maureen',
      email: 'email-salah-format',
      comment: 'Komentar valid'
    });
    expect(result.error).toBeDefined();
  });

  test('Invalid jika comment kosong', () => {
    const result = validateEntry({
      name: 'Maureen',
      email: 'maureen@example.com',
      comment: ''
    });
    expect(result.error).toBeDefined();
  });
});
