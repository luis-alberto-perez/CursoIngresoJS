/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var contador;
	var acumulador;
	var	multiplicador;
	var respuesta;
	var numeroIngresado;

	multiplicador=1;
	contador=0;
	acumulador=0;
	respuesta="si";
	
	while(respuesta == "si")
		 {
		  numeroIngresado = prompt("ingrese un nunmero");
		  numeroIngresado = parseInt(numeroIngresado);
		  if (numeroIngresado < 0 )
		  	 {
		  	  multiplicador *= numeroIngresado;
		  	 }
		  	 else
		  	 {
		  	  acumulador += numeroIngresado; 
		  	 }      
      	   respuesta = prompt("Desea agregar mas datos si/no");
		}

	txtIdSuma.value=acumulador;
	txtIdProducto.value=multiplicador;

}//FIN DE LA FUNCIÓN

/*function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN*/