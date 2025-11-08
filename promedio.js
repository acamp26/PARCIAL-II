/**
 * Función que calcula el promedio de tres calificaciones para un estudiante.
 * Problema 3: Promedio de calificaciones.
 */
function calcularPromedio() {
    // 1. Obtener los valores de los campos de entrada
    const nombreEstudiante = document.getElementById('nombre').value.trim();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const resultadoElemento = document.getElementById('resultado');

    // 2. Validaciones
    if (nombreEstudiante === "") {
        resultadoElemento.textContent = "⚠️ Por favor, ingrese el nombre del estudiante.";
        return;
    }

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoElemento.textContent = "⚠️ Por favor, ingrese las tres calificaciones válidas (números).";
        return;
    }

    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
        resultadoElemento.textContent = "⚠️ Las calificaciones deben estar entre 0 y 100.";
        return;
    }

    // 3. Calcular promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // 4. Mostrar resultado
    resultadoElemento.textContent = `El promedio de ${nombreEstudiante} es: ${promedio.toFixed(2)} puntos.`;
}
