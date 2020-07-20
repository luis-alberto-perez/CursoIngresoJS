/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = 10;
	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < 0 || numeroIngresado > 9)
		{
		 alert("Numero invalido");
		}
	}
	
 txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN