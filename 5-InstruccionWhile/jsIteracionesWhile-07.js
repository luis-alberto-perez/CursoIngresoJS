/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
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
	respuesta='si';
	
	while(respuesta = "si")
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
	txtIdPromedio.value=multiplicador;

}//FIN DE LA FUNCIÓN


/*function mostrar()
{
	var contador;
	var acumulador;
	var	multiplicador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';
	while(respuesta = "si")
		{
		  numeroIngresado = prompt("ingrese un nunmero");
		  if (numeroIngresado < 0 )
		  	 {
		  	  
		  	 }

		}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN*/