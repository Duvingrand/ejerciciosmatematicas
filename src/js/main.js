console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
console.log(1 + 1);

console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
console.log(1 - 1);

console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
console.log(1 * 1);

console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
console.log(1 / 2);

console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
console.log(1 % 2);

console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
console.log(Math.round(Math.random() * 10));

console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
console.log(Math.pow(2, 3));

console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
console.log(Math.sqrt(25));

console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
let X = 0;
console.log((X * 9) / 5 + 32);

console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
let r = 4;
console.log(Math.PI * r ** 2);

console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
let lado = 0;
console.log(lado * 4);

console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
let radioEsfera = 4;
console.log((4 / 3) * Math.PI * radioEsfera ** 3);

console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
let tBase = 5;
let tAltura = 10;
console.log((tAltura * tBase) / 2);

console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
console.log("Tabla del 5");
for (let i = 1; i < 11; i++) {
  console.log(`5 x ${i}: ${5 * i}`);
}

console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
console.log(Math.max(3, 7, 2));

console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
console.log(Math.min(10, 20, 5));
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
console.log((4 + 6 + 8) / 3);

console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
let totalFactorial = 1;
for (let i = 5; i > 0; i--) {
  totalFactorial = totalFactorial * i;
}
console.log(totalFactorial);

console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
console.log(Math.round(3.6));

console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
console.log(9 * 2);

console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
console.log(4 * 3);
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
console.log(6 ** 2);
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
console.log(3 ** 3);

console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
let total = 0;
for (let i = 0; i < 11; i++) {
  total = total + i;
  console.log(total);
}
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
console.log(50 - 25);

console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
console.log(7 * 9);
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
console.log(144 / 12);
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
console.log(17 % 4);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
console.log(Math.round(Math.random() * (30 - 20) + 20));
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
console.log(2 ** 8);
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
console.log(Math.sqrt(144));

console.groupEnd();

console.groupCollapsed("32.Convertir 100 grados Celsius a Fahrenheit.");
// Ejercicio 32

console.log((100 * 9) / 5 + 32);

console.groupEnd();

console.groupCollapsed(
  "33.Calcular el área de un rectángulo de base 5 y altura 10."
);
// Ejercicio 33
console.log((5 * 10) / 2);
console.groupEnd();

console.groupCollapsed("34.Calcular el perímetro de un círculo con radio 6.");
// Ejercicio 34
console.log(Math.PI ** 2 * 6);
console.groupEnd();

console.groupCollapsed("35.Calcular el volumen de un cubo con lado 4.");
// Ejercicio 35
let altoCubo = 1;
let anchoCubo = 1;
let profundoCubo = 1;
console.log(altoCubo * anchoCubo * profundoCubo);
console.groupEnd();

console.groupCollapsed(
  "36.Calcular el área de un rombo con diagonales de 8 y 10."
);
// Ejercicio 36
console.log((8 * 10) / 2);

console.groupEnd();

console.groupCollapsed(
  "37.Calcular el área de un trapecio con bases 6 y 10 y altura 4."
);
// Ejercicio 37
console.log(((6 + 10) * 4) / 2);

console.groupEnd();

console.groupCollapsed("38.Generar la tabla de multiplicar del número 8.");
// Ejercicio 38
let num = 0;
for (let i = 0; i < 11; i++) {
  num = num * i;
  console.log(`8 x ${i} = ${i * 8}`);
}
console.groupEnd();

console.groupCollapsed("39.Encontrar el número mayor entre 15, 20 y 25.");
// Ejercicio 39
console.log(Math.max(15, 20, 25));

console.groupEnd();

console.groupCollapsed("40.Encontrar el número menor entre 50, 75 y 100.");
// Ejercicio 40
console.log(Math.min(50, 75, 100));
console.groupEnd();

console.groupCollapsed("41.Calcular el promedio de 7, 9 y 12.");
// Ejercicio 41
console.log((7 + 9 + 12) / 3);

console.groupEnd();

console.groupCollapsed("42.Calcular la factorial de 7.");
// Ejercicio 42
let factorial2 = 1;
for (let i = 7; i > 0; i--) {
  factorial2 = factorial2 * i;
}
console.log(factorial2);
console.groupEnd();

console.groupCollapsed("43.Redondear el número 7.9.");
// Ejercicio 43
console.log(Math.round(7.9));

console.groupEnd();

console.groupCollapsed("44.Calcular el doble de 15.");
// Ejercicio 44
console.log(15 * 2);

console.groupEnd();

console.groupCollapsed("45.Calcular el triple de 6.");
// Ejercicio 45
console.log(6 * 3);
console.groupEnd();

console.groupCollapsed("46.Calcular el cuadrado de 8.");
// Ejercicio 46
console.log(8 ** 2);

console.groupEnd();

console.groupCollapsed("47.Calcular el cubo de 4.");
// Ejercicio 47
console.log(4 ** 3);
console.groupEnd();

console.groupCollapsed(
  "48.Calcular la suma de los primeros 15 números naturales."
);
// Ejercicio 48
let numero = 0;
for (let i = 0; i < 16; i++) {
  numero = numero + i;
}
console.log(numero);
console.groupEnd();

console.groupCollapsed("49.Calcular la resta entre 100 y 55.");
// Ejercicio 49
console.log(100 - 55);

console.groupEnd();

console.groupCollapsed("50.Multiplicar 6 por 8.");
// Ejercicio 50
console.log(6 * 8);
console.groupEnd();

console.groupCollapsed("51.Dividir 225 por 15.");
// Ejercicio 51
console.log(225 / 15);
console.groupEnd();

console.groupCollapsed("52.Obtener el módulo de 20 dividido por 7.");
// Ejercicio 52
console.log(20 % 7);
console.groupEnd();

console.groupCollapsed("53.Generar un número aleatorio entre 40 y 50.");
// Ejercicio 53
console.log(Math.round(Math.random() * (50 - 40) + 40));
console.groupEnd();

console.groupCollapsed("54.Elevar 3 a la potencia de 4.");
// Ejercicio 54
console.log(3**4)
console.groupEnd();

console.groupCollapsed("55.Calcular la raíz cuadrada de 169.");
// Ejercicio 55
console.log(Math.sqrt(169))
console.groupEnd();

console.groupCollapsed("Ejercicio 56");
// Ejercicio 56
console.groupEnd();

console.groupCollapsed("Ejercicio 57");
// Ejercicio 57
console.groupEnd();

console.groupCollapsed("Ejercicio 58");
// Ejercicio 58
console.groupEnd();

console.groupCollapsed("Ejercicio 59");
// Ejercicio 59
console.groupEnd();

console.groupCollapsed("Ejercicio 60");
// Ejercicio 60
console.groupEnd();

console.groupCollapsed("Ejercicio 61");
// Ejercicio 61
console.groupEnd();

console.groupCollapsed("Ejercicio 62");
// Ejercicio 62
console.groupEnd();

console.groupCollapsed("Ejercicio 63");
// Ejercicio 63
console.groupEnd();

console.groupCollapsed("Ejercicio 64");
// Ejercicio 64
console.groupEnd();

console.groupCollapsed("Ejercicio 65");
// Ejercicio 65
console.groupEnd();

console.groupCollapsed("Ejercicio 66");
// Ejercicio 66
console.groupEnd();

console.groupCollapsed("Ejercicio 67");
// Ejercicio 67
console.groupEnd();

console.groupCollapsed("Ejercicio 68");
// Ejercicio 68
console.groupEnd();

console.groupCollapsed("Ejercicio 69");
// Ejercicio 69
console.groupEnd();

console.groupCollapsed("Ejercicio 70");
// Ejercicio 70
console.groupEnd();

console.groupCollapsed("Ejercicio 71");
// Ejercicio 71
console.groupEnd();

console.groupCollapsed("Ejercicio 72");
// Ejercicio 72
console.groupEnd();

console.groupCollapsed("Ejercicio 73");
// Ejercicio 73
console.groupEnd();

console.groupCollapsed("Ejercicio 74");
// Ejercicio 74
console.groupEnd();

console.groupCollapsed("Ejercicio 75");
// Ejercicio 75
console.groupEnd();

console.groupCollapsed("Ejercicio 76");
// Ejercicio 76
console.groupEnd();

console.groupCollapsed("Ejercicio 77");
// Ejercicio 77
console.groupEnd();

console.groupCollapsed("Ejercicio 78");
// Ejercicio 78
console.groupEnd();

console.groupCollapsed("Ejercicio 79");
// Ejercicio 79
console.groupEnd();

console.groupCollapsed("Ejercicio 80");
// Ejercicio 80
console.groupEnd();

console.groupCollapsed("Ejercicio 81");
// Ejercicio 81
console.groupEnd();

console.groupCollapsed("Ejercicio 82");
// Ejercicio 82
console.groupEnd();

console.groupCollapsed("Ejercicio 83");
// Ejercicio 83
console.groupEnd();

console.groupCollapsed("Ejercicio 84");
// Ejercicio 84
console.groupEnd();

console.groupCollapsed("Ejercicio 85");
// Ejercicio 85
console.groupEnd();

console.groupCollapsed("Ejercicio 86");
// Ejercicio 86
console.groupEnd();

console.groupCollapsed("Ejercicio 87");
// Ejercicio 87
console.groupEnd();

console.groupCollapsed("Ejercicio 88");
// Ejercicio 88
console.groupEnd();

console.groupCollapsed("Ejercicio 89");
// Ejercicio 89
console.groupEnd();

console.groupCollapsed("Ejercicio 90");
// Ejercicio 90
console.groupEnd();
