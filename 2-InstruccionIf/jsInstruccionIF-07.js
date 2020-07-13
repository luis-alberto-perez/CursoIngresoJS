function mostrar()
{
	//tomo la edad  
 edad = txtIdEdad.value;
 suEstadoCivil = estadoCivil.value;

 if (edad < 18 & suEstadoCivil != "Soltero")
 {
 	alert("Es muy joven para no ser soltero");
 }

}//FIN DE LA FUNCIÓN