/*ingresar nombre del producto, importe y precio por promp y mostrar los datos mas el precio final mas el aumento.*/
function aumetarPrecio()
{
var nombreProducto;
var importeProducto;
var aumentoProducto;
var aumento;
var importeFinal;

nombreProducto = prompt("ingrese el nombre del producto");
importeProducto = prompt("Ingrese el importe");
importeProducto = parseInt(importeProducto);
aumentoProducto = prompt("Ingrese el porcentaje a aumentar 1 al 100");
aumentoProducto = parseInt(aumentoProducto);

aumento = importeProducto*(aumentoProducto / 100);
importeFinal = importeProducto + aumento;
alert("El producto " + nombreProducto + " Cuesta sin aumento $" + importeProducto + ",tiene un aumento de $" + aumento + " Y el precio final es $" + importeFinal + " .Gracias por su compra");   

}
		