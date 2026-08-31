const duplicar = numero => numero * 2 // f
const sumarUno = numero => numero + 1 // g
const convertirTexto = numero => `Resultado: ${numero}`


const procesar = numero => convertirTexto(sumarUno(duplicar(numero)))

console.log(procesar(5))
console.log(procesar(8))