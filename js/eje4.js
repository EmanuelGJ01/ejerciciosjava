let categoria = prompt("digite la categoría: ");
let a = 100000;
let b = 200000;
let c = 300000;
let d = 400000;
let e = 500000;


if (categoria == "a") {
  document.write("Tu sueldo es: ", a);
} else {
  if (categoria == "b") {
    console.log("Tu sueldo es: " + b);
  } else {
    if (categoria == "c") {
      console.log("Tu sueldo es: " + c);
    } else {
      if (categoria == "d") {
        console.log("Tu sueldo es: " + d);
      }else{
        if(categoria=="e"){
            console.log("Tu sueldo es: "+ e)
        }else{
            console.log("No es una categoria, deben ser desde a hasta e")
        }
      }
    }
  }
}

/* 
    4. desarrollar un algoritmo que asigne el sueldo a cinco empleados, teniendo
en cuenta su categoría. */
