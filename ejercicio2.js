try {
    // Caso 1
    const arr = [1, 2, 3];
    arr.toUppercase(); 
    // Se está intentando usar un método que no existe en el array.
    // El bloque catch captura el error y muestra que es un error de tipo TypeError,
    // ya que 'toUppercase' no es una función válida para arrays.
  } catch (error) {
    console.log('Error Caso 1:', error.name); // TypeError
  }
  
  try {
    // Caso 2
    eval('if (true) {');
    // Se está intentando ejecutar código con un error de sintaxis.
    // El bloque catch captura el error y muestra que es un SyntaxError,
    // ya que falta cerrar la llave del if.
  } catch (error) {
    console.log('Error Caso 2:', error.name); // SyntaxError
  }
  
  try {
    // Caso 3
    console.log(variableInexistente);
    // Se está intentando acceder a una variable que no existe en el bloque try,
    // por lo que el bloque catch captura el error y muestra informando que es
    // un error de tipo ReferenceError, ya que la variable no existe.
  } catch (error) {
    console.log('Error Caso 3:', error.name); // ReferenceError
  }  