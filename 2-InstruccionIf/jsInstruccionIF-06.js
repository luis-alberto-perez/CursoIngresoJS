/*Al ingresar una edad debemos informar si la 
persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años)*/

function mostrar()
{
	//tomo la edad  
	var edad; 
	var msjMayorEdad;
	var msjNiño;
	var msjAdolescente;

	msjMayorEdad ="Mayor de edad";
	msjNiño = "Es un niño";
	msjAdolescente = "Es un adolescente";

	edad = txtIdEdad.value;

	if (edad > 17) 
		{
		txtIdEdad.value = (msjMayorEdad); 
		} 
	else 
		{
		  if (edad < 13) 
		     {
			txtIdEdad.value = (msjNiño);
		     }
	     else
		    {
			txtIdEdad.value = (msjAdolescente);
		    }
		}
   

}//FIN DE LA FUNCIÓN