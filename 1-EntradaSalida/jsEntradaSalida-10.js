/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;

	descuento = 0.25;

	importe = txtIdImporte.value;
    importe = parseInt(importe);
  
	importe = importe - (importe * descuento);
  	
	txtIdResultado.value = importe;

}
