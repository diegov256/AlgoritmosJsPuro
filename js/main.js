function saludo() {
alert("bienvenido usuario");
alert("A continuación encontrarás unos botones que ejecutan algoritmos realizados con Js puro");

}
function suma(){
    // Declarar variables para almacenar los números ingresados
    let A = 0;
    let B = 0;
    let SUMA = 0 ;
    // Solicitar al usuario que ingrese los valores a sumar
    A = parseInt(prompt("POR FAVOR INGRESA EL PRIMER VALOR A SUMAR"));
    B = parseInt(prompt("POR FAVOR INGRESA EL SEGUNDO VALOR A SUMAR"));
    // Realizar la suma de los valores ingresados
    SUMA = A + B;
    // Mostrar el resultado de la suma en una ventana emergente
    alert("EL RESULTADO DE LA SUMA ES:"+SUMA);
    alert("bien hecho te mereces un 5");

}
function operaciones(){
    // Declarar variables para almacenar los números ingresados
    let A = 0;
    let B = 0;
    let resta = 0 ;
    let multiplicacion =0;
    let division = 0;
    // Solicitar al usuario que ingrese los valores
    A = parseInt(prompt("POR FAVOR INGRESA EL PRIMER VALOR "));
    B = parseInt(prompt("POR FAVOR INGRESA EL SEGUNDO VALOR"));
    // Realizar las operaciones de resta, multiplicación y división
    resta = A - B;
    multiplicacion = A * B;
    division = A/B;
    // Mostrar los resultados de las operaciones en ventanas emergentes
    alert("EL RESULTADO DE LAS LA RESTA ES:"+resta);
    alert("EL RESULTADO DE LAS LA MULTIPLICACION ES:"+multiplicacion);
    alert("EL RESULTADO DE LAS LA DIVISION ES:"+division);


    alert("bien hecho te mereces un 5");

}
function cuadradoS(){
    // Declarar variables para almacenar los números ingresados
    let A = 0;
    let cuadrado =0;
    // Solicitar al usuario que ingrese el valor
    A = parseInt(prompt("POR FAVOR INGRESA EL PRIMER VALOR "));
    
   // Calcular el cuadrado del valor ingresado
cuadrado = A * A;
// Mostrar el resultado del cuadrado en una ventana emergente
alert("EL RESULTADO  ES:"+cuadrado);
}

function areatriangulo(){
    // Declarar variables para almacenar los números ingresados
    let A = 0;
    let B = 0;
    // Solicitar al usuario que ingrese la base y la altura del triángulo
    A = parseInt(prompt("POR FAVOR INGRESA LA BASE DEL TRIANGULO"));
    B = parseInt(prompt("POR FAVOR INGRESA LA ALTURA DEL TRIANGULO"));
    // Calcular el área del triángulo
    area = A*B/2;
    // Mostrar el resultado del área en una ventana emergente
    alert("EL RESULTADO DEL AREA ES:"+area);
}

function promedioNota(){
    // Declarar variables para almacenar los datos ingresados
    let  nombres;
    let  apellidos;
    let  materia;
    let estado;
    let nota1,nota2,nota3,nota4,nota5,nota6,nota7;
    // Solicitar al usuario que ingrese los datos personales y las notas
    nombres =prompt("POR FAVOR INGRESA SU NOMBRE");
    apellidos =prompt("POR FAVOR INGRESA SUS APELLIDOS");
    materia = prompt("POR FAVOR INGRESA LA MATERIA");
    nota1 = parseInt(prompt("POR FAVOR INGRESA LA PRIMERA NOTA"));
    nota2 = parseInt(prompt("POR FAVOR INGRESA LA SEGUNDA NOTA"));
    nota3 = parseInt(prompt("POR FAVOR INGRESA LA TERCERA NOTA"));
    nota4 = parseInt(prompt("POR FAVOR INGRESA LA CUARTA NOTA"));
    nota5 = parseInt(prompt("POR FAVOR INGRESA LA QUINTA NOTA"));
    nota6 = parseInt(prompt("POR FAVOR INGRESA LA SEXTA NOTA"));
    nota7 = parseInt(prompt("POR FAVOR INGRESA LA SEPTIMA NOTA"));
     // Calcular el promedio de las notas
    promedio = Math.round((nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7);
    if (promedio>=6.2){ 
        estado="aprobo";
    }
    else{ 
        estado="reprobo";
    }
    // Mostrar el resultado del promedio, estado y nombre del estudiante en una ventana emergente
    alert("EL RESULTADO ES: "+promedio+"EL ESTADO ES: "+estado+"El NOMBRE DEL ESTUDIANTE ES: "+nombres);
    
}
function mayorde2(){
    // Declarar variables para almacenar los números ingresados
    let num1 = 0;
    let num2 = 0;
    // Solicitar al usuario que ingrese los números
    num1 = parseInt(prompt("POR FAVOR INGRESA EL PRIMER NUMERO"));
    num2 = parseInt(prompt("POR FAVOR INGRESA EL SEGUNDO NUMERO"));
    // Comparar los números y mostrar el resultado en una ventana emergente
    if (num1 === num2) {
          alert("El número 1 es igual al número 2");
        } else if (num1 > num2) {
          alert("El número 1 es mayor que el número 2");
        } else {
          alert("El número 1 es menor que el número 2");
        }
      }

 
function menorde3(){
   // Declarar variables para almacenar los números ingresados
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
    // Solicitar al usuario que ingrese tres números
 numero1 = parseFloat(prompt("Ingresa el primer número"));
 numero2 = parseFloat(prompt("Ingresa el segundo número"));
 numero3 = parseFloat(prompt("Ingresa el tercer número"));

let menor = numero1; // Suponemos que el primer número es el menor

// Comparar el segundo número con el menor actual
if (numero2 < menor) {
  menor = numero2;
}

// Comparar el tercer número con el menor actual
if (numero3 < menor) {
  menor = numero3;
}

// Mostrar el resultado en una ventana emergente
alert("El menor de los tres números es: " + menor);

}
  function inversion(){
     // Declarar variables para almacenar los números ingresados
    let capital=0;
    let años=0;
    capital = parseFloat(prompt("Ingresa el monto de capital a invertir:"));
    años = parseInt(prompt("Ingresa el número de años de inversión:"));
    
    let tasaInteresMensual = 0.017; // Tasa de interés mensual (1.7%)
    let tasaInteresAnual = 1 + tasaInteresMensual; // Tasa de interés anual
    
    let montoFinal = capital * Math.pow(tasaInteresAnual, años); // Cálculo del monto final
    
    alert("Después de " + años + " años, tu capital habrá crecido a: $" + montoFinal);
}

function kilodescuento(){
    // Definir el precio por kilo de las manzanas
    let precioKilo = 4500;
    let kilosComprados = 0;
    let descuento= 0;
// Solicitar al usuario la cantidad de kilos de manzanas que desea comprar
kilosComprados = parseFloat(prompt("Ingrese la cantidad de kilos de manzanas que desea comprar:"));
// Definir el descuento inicial como 0
descuento=0;
// Calcular el descuento según la cantidad de kilos comprados
if (kilosComprados >= 3 && kilosComprados <= 8) {
  descuento = 0.16; // 16% de descuento
} else if (kilosComprados >= 9) {
  descuento = 0.20; // 20% de descuento
}

let montoPagar = kilosComprados * precioKilo * (1 - descuento);
// Mostrar el monto a pagar al cliente
alert("El monto a pagar es: $" + montoPagar);

}
    

  






 
      

      
      
        
      
    
    
 

    

