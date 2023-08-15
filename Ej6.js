/* Leer 20 números y encontrar el mayor y el menor valor leídos. */

/* let miArray = []; // [1,2,3]
for (let index = 0; index < 20; index++) {
  let nroAleatorio = Math.round(Math.random() * 100) + 1;
  miArray.push(nroAleatorio);
}
console.log(miArray);//[1,2,3]
console.log(Math.max(...miArray));// 1, 2, 3 */
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < 20; i++) {
  let nroAleatorio = Math.round(Math.random() * 100) + 1; // genera nro aleatorio entre 1 y 100
  console.log(nroAleatorio);
  if (nroAleatorio > max) {
    max = nroAleatorio;
  } else if (nroAleatorio < min) {
    min = nroAleatorio;
  }
}
console.log({ min });
console.log({ max });
