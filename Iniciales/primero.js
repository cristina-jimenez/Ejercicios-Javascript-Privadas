/* EJERCICIO 1.- 
Has hecho una compra y sabes el precio del producto y su iva. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100.
Precio 200€
Iva: 21%
El total son 242 €.  //200 + 21*200/100  */

const valortotal = (precio, iva) => {
    const interes = precio * iva /100;
    const costo = precio + interes;
    console.log("El valor total es " + costo)
    return costo
};
valortotal(200, 21);




/* EJERCICIO 2.-  
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados. 
Lado 40   El area es 1600
El perímetro es 169   */

const CalculoCuadrado = (lado) => {
  const calcperimetro = lado * 4;
  const calcArea = lado * lado;
  console.log(
    " El perimetro es " + calcperimetro + " , y el área es " + calcArea
  );
  return calcperimetro;
  return calcArea;
};

CalculoCuadrado(4);