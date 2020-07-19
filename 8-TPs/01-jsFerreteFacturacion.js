/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

// Declaracion de Variables
	var precioUno; 
	var preciosDos;
	var preciosTres;
	var sumar;

//Inicializacion de variables + Conversion de datos str a int
	precioUno = txtIdPrecioUno.value;
	precioUno = parseInt(precioUno);
	preciosDos = txtIdPrecioDos.value;
	preciosDos = parseInt(preciosDos);
	preciosTres = txtIdPrecioTres.value;
	preciosTres = parseInt(preciosTres);
//Suma de los 3 precios

	sumar = precioUno + preciosDos + preciosTres;

alert("La suma es " + sumar);
}

function Promedio () 
{

// Declaracion de Variables
	var precioUno; 
	var preciosDos;
	var preciosTres;
	var promedio;

//Inicializacion de variables + Conversion de datos str a int
	precioUno = txtIdPrecioUno.value;
	precioUno = parseInt(precioUno);
	preciosDos = txtIdPrecioDos.value;
	preciosDos = parseInt(preciosDos);
	preciosTres = txtIdPrecioTres.value;
	preciosTres = parseInt(preciosTres);
//Promedio de los 3 precios

	promedio = (precioUno + preciosDos + preciosTres)/3;

alert("El promedio es " + promedio);
}

function PrecioFinal () 
{
	// Declaracion de Variables
	var precioUno; 
	var preciosDos;
	var preciosTres;
	var iva21;

//Inicializacion de variables + Conversion de datos str a int
	precioUno = txtIdPrecioUno.value;
	precioUno = parseInt(precioUno);
	preciosDos = txtIdPrecioDos.value;
	preciosDos = parseInt(preciosDos);
	preciosTres = txtIdPrecioTres.value;
	preciosTres = parseInt(preciosTres);
//suma de los precios y grabado del iva-

	iva21 = (precioUno + preciosDos + preciosTres)*1.21;

alert("El precio final mas el iva del 21% es " + iva21);
}