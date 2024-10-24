/* 10.A ciertos estudiantes se les dice que su calificación final será el promedio
de las dos calificaciones más altas de entre las tres que se han obtenido en

el curso. Haga un algoritmo que permita a un estudiante efectuar el cálculo
correspondiente a su nota final. */

let nota1 = parseInt(prompt("Nota 1 : "))
let nota2 = parseInt(prompt("Nota 2 : "))
let nota3 = parseInt(prompt("Nota 3 : "))
let promedio = nota1+nota2+nota3/3

    console.log("Tu nota final es : ", promedio)