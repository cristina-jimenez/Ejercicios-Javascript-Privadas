/* Has hecho una compra y sabes el precio del producto y su iva. 
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
