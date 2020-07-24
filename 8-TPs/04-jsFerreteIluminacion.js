/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra
 marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del
 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en
 informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var precioBase;
  var marcaIngresada;
  var cantidadComprada;
  var descuento;
  var importeFinal;
  precioBase = 35;
  marcaIngresada = Marca.value;
  cantidadComprada = txtIdCantidad.value;

  if(cantidadComprada > 5)
    {
 	  precioBase = precioBase - precioBase*0,5;
    }
    else
    {		
		if(cantidadComprada == 5)
		{
			if( marcaIngresada == "ArgentinaLuz")
			{
				precioBase = precioBase - precioBase*0,40;
			}
			else
			{
				precioBase = precioBase - precioBase*0,30;
			}
		}
		else
    {		
		if(cantidadComprada == 5)
		{
			if( marcaIngresada == "ArgentinaLuz")
			{
				precioBase = precioBase - precioBase*0,40;
			}
			else
			{
				precioBase = precioBase - precioBase*0,30;
			}
		}
		else
		{

			  if(cantidadComprada == 3)
			{
				if( marcaIngresada == "ArgentinaLuz")
				{
					precioBase = precioBase - precioBase*0,15;
				}
				else
				{
					if(marcaIngresada == "FelipeLamparas")
					{
						precioBase = precioBase - precioBase*0,10;
					}
					else
					{
						precioBase = precioBase - precioBase*0,05;	
					}
					
				}
			}	
		}
	}	
   /* D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es 
    “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%*/

    


}
