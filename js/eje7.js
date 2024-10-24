/* 7. Desarrolle un algoritmo que lea de un registro: el nombre, la edad, el sexo,
el estado civil de cualquier persona e imprima el nombre de la persona, si
corresponde a un hombre casado mayor de 40 años o a una mujer soltera
menor de 50 años. */

let nombre = prompt("Ingrese su nombre: ")
let edad = parseInt(prompt("Ingrese su edad :"))
let sexo = prompt("Ingrese su sexo : f o m ",)
let estado = prompt("Estado civil : ")


if(sexo == "f" && estado == "soltera"){
    document.write("Eres mujer :", estado + "Tienes : ", edad)

}else{
    if(sexo== "m" && estado=="soltero"){
        document.write("Eres hombre :"+ estado+ "Tienes : ",edad)

    }else{
        if(edad >=50 || estado =="casado" )
            document.write("No aplicas")
    }
}