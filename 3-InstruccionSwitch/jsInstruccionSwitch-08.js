function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
	 case "Bariloche":
	 alert("Hace frio");
	 break;
	 case "Ushuaia":
	 alert("Hace muchisimo Frio");
	 break;
	 case "Mar del plata":
	 alert("calor en verano.. pero en invierno frio");
	 break;
	 case "Cataratas":
	 alert("Hace Calor, lleve repelente contra mosquitos, serpientes y tarantulas")
	 break;
	 default:
	 alert("algo anda mal");

	}


	alert(destinoIngresado);


}//FIN DE LA FUNCIÓN