/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var resto;
	
	num1 = txtIdNumeroDividendo.value;
	num2 = txtIdNumeroDivisor.value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2); 
	
	resto = num2 % num1;
	
	alert ("El resto es " + resto);
   	
}

