
    let inicio = prompt("Ingrese ESC para terminar, sino escriba EMPEZAR").toLowerCase()

    if(inicio != 'esc' && inicio != 'empezar'){
        alert('La palabra ingresada no existe, por favor introduzca "esc para salir" o "empezar para iniciar"')
    }
    while (inicio != "esc" && inicio == 'empezar') {

        const sumarEdades = (sumaUno, sumaDos, sumaTres) =>{
            let suma = sumaUno + sumaDos + sumaTres
            return suma
        }
        const promedioDeEdad = () => {
            let edadUno = parseFloat(prompt("Ingrese la primer edad para calcular el promedio"))
            let edadDos = parseFloat(prompt("Ingrese la segunda edad para calcular el promedio"))
            let edadTres = parseFloat(prompt("Ingrese la tercer edad para calcular el promedio"))
    
            let resultadoDeSuma = sumarEdades(edadUno, edadDos, edadTres)
    
            let promedio = resultadoDeSuma / 3
            alert("El promedio de edad es " + promedio)
        }
        promedioDeEdad()
        inicio = prompt("ingrese esc para terminar o CONTINUAR para seguir").toLowerCase()
    }
    


