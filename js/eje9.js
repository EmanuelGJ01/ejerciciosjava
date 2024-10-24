/* 9. Dados tres números enteros únicos, a, b y c. Elabore un algoritmo que los
ordene de mayor a menor e imprímalos. */

let num1 =parseInt(prompt("Ingrese un numero unico"))
let num2 =parseInt(prompt("Ingrese un segundo numero unico"))
let num3 =parseInt(prompt("Ingrese un tercer numero unico"))

if(num1>num2 && num1>num3){
    console.log("a es igual a : ", num1)
}else{
    if(num2< num1 && num2>num3)
        console.log("b es igual a: ", num2)
     else{
        //  if(num3<num1 && num3<num2)
           console.log("c es igual a : ", num3)

     }
}  