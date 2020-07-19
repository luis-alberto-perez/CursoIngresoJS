/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
 	var gradosCelsius;
 	var gradosFahrenheit;
 	gradosCelsius = txtIdTemperatura.value;
 	gradosCelsius = parseInt(gradosCelsius);

 	 gradosFahrenheit = (gradosCelsius * 9/5) + 32;

 	alert(" Los Grados en Fahrenheit son " + gradosFahrenheit);
}

function CentigradosFahrenheit () 
{	
	var gradosCelsius;
 	var gradosFahrenheit;
 	gradosFahrenheit = txtIdTemperatura.value;
 	gradosFahrenheit = parseInt(gradosFahrenheit);
 	gradosCelsius = (gradosFahrenheit - 32) * 5/9;

 	alert(" Los Grados en celsius son " + gradosCelsius);
}
