/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo; 
	var aumento;

	aumento = 10;
	
	sueldo = txtIdSueldo.value;
    sueldo = parseInt(sueldo);
  
	sueldo = sueldo + (sueldo * aumento)/100;
  	
	txtIdResultado.value = sueldo;
}
