try {
    // Intentamos acceder a una variable que no existe
    console.log(variableInexistente);
  } catch (error) {
    console.log('Tipo de error:', error.name);
    console.log('Mensaje:', error.message);
  }
// se esta intentando acceder a que no existe en bloque Try por lo que el bloque
// catch captura el error y muestra informando que es un error de typo ReferenceError
// ya que la variable no exite