function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	while(contador < 5)
	{
	 contador += 1;
	 numeroIngresado = prompt("ingrese un numero");
	 numeroIngresado = parseInt(numeroIngresado);
	 acumulador += numeroIngresado;
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN