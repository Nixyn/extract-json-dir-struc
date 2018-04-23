describe('Users', () => {
  test('Debería comprobar si el fichero tiene todos los campos', () => {
    expect(get_Data("./users/Usuario1/datos.txt")).toBe('{Nombre : Juan Domingez, Dni : 44323567F, Correo: hola@gmail.com}');
  });
});