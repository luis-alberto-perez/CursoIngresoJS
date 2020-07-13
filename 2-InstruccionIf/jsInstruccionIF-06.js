/*Al ingresar una edad debemos informar si la 
persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años)*/

function mostrar()
{
	//tomo la edad  
	var edad = txtIdEdad.value;
	if (edad >= 18) 
		{
			txtIdEdad.value = ("Mayor de edad"); 
		} 
	else if (edad <= 12) 
		{
			txtIdEdad.value = ("es un niño");
		}
	else
		{
			txtIdEdad.value = ("Es un adolescente");
		}


}//FIN DE LA FUNCIÓN