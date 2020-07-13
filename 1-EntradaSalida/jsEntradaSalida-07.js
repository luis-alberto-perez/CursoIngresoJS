/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	var numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);
	var numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	var sumar = numero1 + numero2 ;

	alert("la suma es " + sumar);
}



function restar()
{

	var numero3 = txtIdNumeroUno.value;
	numero3 = parseInt(numero3);
	var numero4 = txtIdNumeroDos.value;
	numero4 = parseInt(numero4);

	var resta = numero3 - numero4 ;

	alert("la resta es " + resta);	
}

function multiplicar()
{ 

	var numero5 = txtIdNumeroUno.value;
	numero5 = parseInt(numero5);
	var numero6 = txtIdNumeroDos.value;
	numero6 = parseInt(numero6);

	var multiplicar = numero5 * numero6 ;

	alert("La multiplicacion  es " + multiplicar);

}

function dividir()
{
	var numero7 = txtIdNumeroUno.value;
	numero7 = parseInt(numero7);
	var numero8 = txtIdNumeroDos.value;
	numero8 = parseInt(numero8);

	var dividir = numero7 / numero8 ;

	alert("La division es " + dividir);	
}
