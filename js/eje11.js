/* 11.Escriba un algoritmo que acepte o rechace una pieza en forma de varilla,
para una empresa de acuerdo a los siguientes criterios:
a. Su longitud debe ser mayor de 7.5 cm pero no exceder los 9 cm
b. Su diámetro no debe ser menor que 0.5 cm ni mayor de 1.3 cm.
c. Por ningún motivo su masa debe exceder los 5.8 cm
i. Nota: masa = diámetro * longitud / densidad; densidad = 3.5
Gr/cm */

let longitud = parseFloat(prompt("Ingrese la longitud en cm: "))
let diametro = parseFloat(prompt("Ingrese el diametro en cm: "))
let masa = parseFloat(prompt("Ingrese la masa en cm: "))


if(longitud> 7.5 && longitud<=9 ){
    console.log("Aceptada")
}else{
    console.log("Rechazada")

}if(diametro>=0.5 && diametro<=1.3){
    console.log("Aceptada")
}else{
    console.log("Rechazada")

}if(masa=5.8 && masa<=5.8 ){
    console.log("Aceptada")
}else{
    console.log("Rechazada")
}
