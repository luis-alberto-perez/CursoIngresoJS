function mostrar()
{
	//tomo la edad  
	var edad = txtIdEdad.value;
	var estado = estadoCivil.value;
	
	if (edad < 18 & estado != "Soltero") 
		{
		 alert ("nada"); 
		} 
	else
		{ 
		 if (edad >17 & estado =="Soltero") 
		    {
			 alert("es soltero y no menor ");
			}
		}
}//FIN DE LA FUNCIÓN