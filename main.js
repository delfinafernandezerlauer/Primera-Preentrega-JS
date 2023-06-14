// ingresar tres notas, calcular promedio (fx promedio) y mostrar cual fue la nota mas alta (fx nota max)


// declaracion de funciones

// funcion para calculo de promedio

function calcularPromedio (nota1, nota2, nota3){
    prom=((nota1+nota2+nota3)/3);
    console.log("Promedio de las notas: " + prom)
    if(prom<6){
        console.log("desaprobaste :(")
    }
}

//funcion para ver cual fue la maxima nota

function notaMax(nota1, nota2, nota3){
   let max=nota1
   if (nota2>max){
    max=nota2
   }
   if(nota3>max){
    max=nota3
   }
   console.log("Nota mas alta: " + max)
}

//validacion de que la notas sean nros positivos

function validarNotas(nota1, nota2, nota3){
    let invalidas=false
    if(nota1<0 || nota2<0 || nota3<0){
        invalidas=true
    }
    return invalidas
}


//ejecucion


console.log("ingrese tres notas")

let num1=Number(prompt("Primera nota"))
let num2=Number(prompt("Segunda nota"))
let num3=Number(prompt("Tercera nota"))

// repeticion de recepcion de notas hasta que sean positivas

while(validarNotas(num1, num2, num3)){
    confirm("ingresar valores positivos")
    num1=Number(prompt("Primera nota"))
    num2=Number(prompt("Segunda nota"))
    num3=Number(prompt("Tercera nota"))
}

// se calcula promedio y nota maxima solo si las tres fueron positivas
if(!(validarNotas(num1, num2, num3))){

    calcularPromedio(num1, num2, num3)

    notaMax(num1, num2, num3)
}
