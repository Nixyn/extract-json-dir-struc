describe('Users', (n) => {
  test('Debería comprobar si la entrada es un archivo de texto', () => {
    expect(get_Data()).toBe('');
    expect(fromNumber(2)).toBe('II');
  });

  test('Debería convertir número a romano - Letra V', () => {
    expect(fromNumber(4)).toBe('IV');
    expect(fromNumber(5)).toBe('V');
  });

  test('Debería convertir número a romano - Letra X', () => {
    expect(fromNumber(9)).toBe('IX');
    expect(fromNumber(10)).toBe('X');
    expect(fromNumber(11)).toBe('XI');
  });

  test('Debería convertir número a romano - Letra Extra', () => {
    expect(fromNumber(2018)).toBe('MMXVIII');
    expect(fromNumber(2648)).toBe('MMDCXLVIII');
  });
})