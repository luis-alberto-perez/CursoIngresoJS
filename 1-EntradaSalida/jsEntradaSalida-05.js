/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	var nombre;
	var edad;
	var concatenados;

	nombre = txtIdNombre.value;
	 edad = txtIdEdad.value;

	concatenados ="Usted se llama " + nombre + " y tiene" + edad + " años";

	alert(concatenados);
}

