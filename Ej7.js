/* Se ofrece un trabajo que pague un centavo en la primera semana y dobla su salario cada semana, es decir, $0.01 la primera semana; $0.02 la segunda semana; $0.04 la tercera semana;

$2^(n-1)/100 la n-ésima semana. Determine el salario por cada semana y el salario pagado hasta
la fecha por espacio de n semanas. */

let nroAleatorio = Math.round(Math.random() * 100) + 1; // genera nro aleatorio entre 1 y 10
let sueldoSemanal = 0;
let sueldoTotal = 0;
console.log({ nroAleatorio });
for (let semana = 1; semana <= nroAleatorio; semana++) {
  sueldoSemanal = 2 ** (semana - 1) / 100;
  sueldoTotal += sueldoSemanal;
  console.log({ semana }, { sueldoSemanal }, { sueldoTotal });
}
