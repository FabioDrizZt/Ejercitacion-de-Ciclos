/* Ingrese un valor numérico correspondiente a un mes y a continuación muestre todos los meses en
letras que restan para llegar a diciembre del mismo año (por ejemplo, si ingresa 10 debe mostrar
octubre, noviembre y diciembre). Validar que se ingrese un número de mes válido y el proceso
finaliza cuando el operador ingresa el valor cero. Muestre también los valores correctos e
incorrectos ingresados por el usuario. */
let mes;
do {
  mes = Math.round(Math.random() * 15); // genera nro aleatorio entre 0 y 15
  console.log({ mes });
  switch (mes) {
    case 1:
      console.log("enero");
    case 2:
      console.log("febrero");
    case 3:
      console.log("marzo");
    case 4:
      console.log("abril");
    case 5:
      console.log("mayo");
    case 6:
      console.log("junio");
    case 12:
      console.log("diciembre");
      break;
    case 0:
      console.log("Fin del programa.");
      break;
    default:
      console.log("mes erroneo");
      break;
  }
} while (mes != 0);
