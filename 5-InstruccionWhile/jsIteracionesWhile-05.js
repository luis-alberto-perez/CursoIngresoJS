/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = "r";
	while(sexoIngresado != "f" & sexoIngresado != "m")
	{
	 sexoIngresado = prompt("ingrese f ó m .");
	 if (sexoIngresado != "f" & sexoIngresado != "m") 
	 {
	 	alert("Sexo invalido, reingrese por favor");
	 }
	}
	txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN