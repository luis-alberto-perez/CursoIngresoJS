/*Enunciado:

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada;
		estacionIngresada = txtIdEstacion.value;
	var destino;				  
		destino = txtIdDestino.value;
	var estacionMasDestino;
		estacionMasDestino = estacionIngresada + destino;
	
	switch(estacionMasDestino)
	{
	case "Invierno"+"Bariloche":
	alert("El viaje sale " + 15000*1.20);
	break;
	case "Invierno"+"Cataratas":
	alert("El viaje sale " + (15000 - 15000*0.10));
	break;
	case "Invierno"+"Cordoba":
	alert("El viaje sale " + (15000 - 15000 *0.10));
	break;
	case "Invierno"+"Mar del plata":
	alert("El viaje sale " + (15000 - 15000*0.20));
	break;
	case "Verano"+"Bariloche":
	alert("El viaje sale " + (15000 - 15000*0.20));
	break;
	case "Verano"+"Cataratas":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Verano"+"Cordoba":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Verano"+"Mar del plata":
	alert("El viaje sale " + 15000*1.20);
	break;
	case "Otoño"+"Bariloche":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Otoño"+"Mar del plata":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Otoño"+"Cataratas":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Otoño"+"Cordoba":
	alert("El viaje sale " + 15000);
	break;
	case "Primavera"+"Bariloche":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Primavera"+"Mar del plata":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Primavera"+"Cataratas":
	alert("El viaje sale " + 15000*1.10);
	break;
	case "Primavera"+"Cordoba":
	alert("El viaje sale " + 15000);
	break;
	default:
	alert("Hay error");
	}
}//FIN DE LA FUNCIÓN