function mostrar()
{
	//tomo la edad
	var edad; 
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad > 17 )
	{
	txtIdEdad.value = ("Es mayor de edad");
	} 
	if(edad < 18)
	{
	txtIdEdad.value=("Es menor");	
	} 
}//FIN DE LA FUNCIÓN

