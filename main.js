function calcular()
{
	var aSmile = document.getElementById("aSmile").value;
	var bSmile = document.getElementById("bSmile").value;
	var salida = document.getElementById("salida");
	if(aSmile == bSmile){
		salida.innerHTML ="1(si)";
	}
	else{
		salida.innerHTML = "0(no)";
	}
}