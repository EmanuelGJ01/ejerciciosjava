let num1 = parseInt(prompt("Ingrese su primer numero"))
let num2 = parseInt(prompt("Ingrese su segundo numero"))
let num3 = parseInt(prompt("Ingrese su tercer numero"))
if(num1===num2 && num1===num3 && num2===num3)
    {console.log("los tres numeros son iguales ")}
else{
    if (num1==num2)
    {console.log(num1, "es igual a ", num2)}
    else{
        if (num2==num3)
        {console.log(num2, "es igual a ",num3)
        }
        else{
            if(num3==num1){
                console.log(num3,"es igual a " ,num3)
            }
            else{
                console.log("los tres números son diferentes")}
            }
        }
    }

    if(num1 > num2 && num1 > num3)
    { console.log("El mayor es: ", num1)}
    else{
    if(num2 >num1&&num2>num3)
    {console.log("El mayor es: ", num2)
    }
    else{
    console.log("El numero mayor es :", num3)}
    
// menor
    if(num1 <= num2 && num1 <= num3)
        { console.log("El menor es: ", num1)}
        else{
        if(num2 <=num1&&num2<=num3)
        {console.log("El menor es: ", num2)
        }
        else{
        console.log("El número menor es :", num3)}}
    }

    



/* 5. desarrollar un programa que capture tres números e imprima por pantalla
cual es el número mayor, el menor, cuales son iguales, si los tres
diferentes. */