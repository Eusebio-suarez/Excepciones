function procesarArchivo(nombreArchivo) {
    let archivo = null;
    try {
      // Simulamos la apertura del archivo
      archivo = { nombre: nombreArchivo, estado: 'abierto' };
      console.log(`Archivo "${archivo.nombre}" abierto.`);
  
      // Simular procesamiento
      if (nombreArchivo === 'corrupto.txt') {
        throw new Error('Archivo corrupto');
      }
  
      console.log('Procesamiento exitoso');
    } catch (error) {
      console.log('Error al procesar:', error.message);
    } finally {
      // Este bloque se ejecuta siempre
      if (archivo) {
        archivo.estado = 'cerrado';
        console.log(`Archivo "${archivo.nombre}" cerrado.`);
      }
    }
  }
  
  // Pruebas
  procesarArchivo('documento.txt')  // Caso exitoso
  procesarArchivo('corrupto.txt')   // Caso con error
  