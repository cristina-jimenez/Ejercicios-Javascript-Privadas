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



/* Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" 
seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre" 

Aparecerá el prompt y el usuario escribirá su nombre:   (El prompt es funcion del navegador)
Usuario escribe juan
Hola Juan  */


const Name = prompt("Mucho gustos, Por favor escribe tu precioso nombre: ");
console.log("Hola " + Name);
// Hola Cristina


//*Agregar productor al carrito de compras, usando prompt, es decir preguntandole al usuario
const productos = [];
let respuesta = confirm(
  "Buenos días, ¿Desea agregar algún producto para comprar?"
);
if (respuesta == true) {
  while (respuesta == true) {
    producto = prompt("¿Qué producto desea agregar?");
    productos.push(producto);
    respuesta = confirm("¿Desea agregar otro producto para comprar?");
  }
  //console.log(`Sus compras son las siguientes: ${productos}. Gracias Por su Compra`);
  console.log("Usted compró: ");
  for (let producto of productos) {
    console.log(producto);
  };
} else {
  console.log("Usted no ha comprado nada");
};
