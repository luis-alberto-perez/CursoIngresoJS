function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	switch(mesDelAño){
	case "Febrero":
	alert("Tiene 28 dias");
	break;
	case "Abril":
	alert("Tiene 30 dias");
	break;
	case "Junio":
	alert("Tiene 30 dias");
	break;
	case "Septiembre":
	alert("Tiene 30 dias");
	break;
	case "Noviembre":
	alert("Tiene 30 dias");
	break;
	default:
	alert("Tiene 31 dias");
	}
	



}//FIN DE LA FUNCIÓN