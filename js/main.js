"use strict";

const limpiarBtn = () => {
	// Limpiar campos
	document.getElementById("valor").value = "";
	document.getElementById("enganche").value = "";
	document.getElementById("totalFinanciar").value = "";
	document.getElementById("planCredito").value = "-1";
	document.getElementById("pagoMensual").value = "";
};

const calcularBtn = () => {
	// Obtener valores
	const opcion = document.getElementById("planCredito").value;
	const valor = parseInt(document.getElementById("valor").value);
	let interes, meses;

	// Validar valor
	if (isNaN(valor) || valor <= 0) {
		document.getElementById("valor").type = "number";
		document.getElementById("valor").value = "";
		return alert("Introduzca un valor valido");
	}

	switch (opcion) {
		case "0":
			interes = 0.125;
			meses = 12;
			break;

		case "1":
			interes = 0.172;
			meses = 18;
			break;

		case "2":
			interes = 0.21;
			meses = 24;
			break;

		case "3":
			interes = 0.26;
			meses = 36;
			break;

		case "4":
			interes = 0.45;
			meses = 48;
			break;

		default:
			document.getElementById("planCredito").value = "-1";
			return alert("Seleccione una opcion valida");
	}

	// Calcular resultados y mostrarlos
	document.getElementById("enganche").value = (valor * 0.3).toFixed(2);
	const enganche = document.getElementById("enganche").value;
	document.getElementById("totalFinanciar").value = ((valor - enganche) + (valor * interes)).toFixed(2);
	const financiar = document.getElementById("totalFinanciar").value;
	document.getElementById("pagoMensual").value = (financiar / meses).toFixed(2);
};

document.getElementById("btnLimpiar").addEventListener("click", limpiarBtn);
document.getElementById("btnCalcular").addEventListener("click", calcularBtn);
