let sueldo = parseInt(prompt("Digite su sueldo"))
if(sueldo < 300000){
    let  agregado = sueldo *15/100
    let  suma = agregado + sueldo
    console.log("Su sueldo es de", suma)

}
else{
    console.log("Su sueldo es", sueldo)
}
