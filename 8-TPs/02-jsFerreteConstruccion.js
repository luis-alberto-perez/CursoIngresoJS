/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
// Declaracion de variables
var largo;
var ancho;	
var areaTerreno;
var cantidadDeAlambres;
var mtsAlambre;

// Cantidad de alambres a formar el alambrado. Si quieren 1 almambre o 2 o los que sean cambien ese valor
cantidadDeAlambres = 3;

largo = txtIdLargo.value;
largo = parseInt(largo);
ancho = txtIdAncho.value;
ancho = parseInt(ancho);

areaTerreno = (largo * ancho)*2; // Area del rectangulo (Alto x Ancho)x2
mtsAlambre = areaTerreno * cantidadDeAlambres;
alert("La cantidad de metros de alambre necesario es " + mtsAlambre); 
}

function Circulo () 
{
	var radio;
	var areaTerrenoCircular;
	var cantidadDeAlambres;
	var mtsAlambre;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	cantidadDeAlambres = 3;

	areaTerrenoCircular = Math.PI*2* radio; 
	mtsAlambre = areaTerrenoCircular * cantidadDeAlambres;

	alert("La cantidad de alambres que necesito  para cubrir el terreno circular es de " + mtsAlambre);

}
function Materiales () 
{

var largo;
var ancho;	
var areaTerreno;
var cantidadDeBolsasCal;
var cantidadDeBolsasCemento;


largo = txtIdLargo.value;
largo = parseInt(largo);
ancho = txtIdAncho.value;
ancho = parseInt(ancho);

areaTerreno = (largo * ancho)*2;
cantidadDeBolsasCemento = areaTerreno * 2;
cantidadDeBolsasCal = areaTerreno * 3;
alert("Para realizar el contrapiso se necesitan "+ cantidadDeBolsasCemento + " bolsas de cemento y " + cantidadDeBolsasCal + " bolsas de cal");
	
}