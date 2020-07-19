/*function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN*/

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
	alert("Se viaja");
	break;
	case "Invierno"+"Cataratas":
	alert("No se viaja");
	break;
	case "Invierno"+"Cordoba":
	alert("No se viaja");
	break;
	case "Invierno"+"Mar del plata":
	alert("No se viaja");
	break;
	case "Verano"+"Bariloche":
	alert("No se viaja");
	break;
	case "Verano"+"Cataratas":
	alert("Se viaja");
	break;
	case "Verano"+"Cordoba":
	alert("No se viaja");
	break;
	case "Verano"+"Mar del plata":
	alert("Se viaja");
	break;
	case "Otoño"+"Bariloche":
	alert("Se viaja");
	break;
	case "Otoño"+"Mar del plata":
	alert("Se viaja");
	break;
	case "Otoño"+"Cataratas":
	alert("Se viaja");
	break;
	case "Otoño"+"Cordoba":
	alert("Se viaja");
	break;
	case "Primavera"+"Bariloche":
	alert("No se viaja");
	break;
	case "Primavera"+"Mar del plata":
	alert("Se viaja");
	break;
	case "Primavera"+"Cataratas":
	alert("Se viaja");
	break;
	case "Primavera"+"Cordoba":
	alert("Se viaja");
	break;
	default:
	alert("Hay error");
	}
}//FIN DE LA FUNCIÓN