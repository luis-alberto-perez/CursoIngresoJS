/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 
	var numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);
	var numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	var sumar = numero1 + numero2 ;

	alert("la suma es " + sumar);
}

