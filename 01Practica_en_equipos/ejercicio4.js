function ejercicio4(salario_mensual, antiguedad){

    var utlidad_anual

    antiguedad = antiguedad / 12
    
    if (antiguedad > 0 && antiguedad < 1){

        utlidad_anual = 12 * (salario_mensual * 1.05)

    } else if (antiguedad => 1 && antiguedad < 2){

        utlidad_anual = 12 * (salario_mensual * 1.07)

    } else if (antiguedad => 2 && antiguedad < 5){

        utlidad_anual = 12 * (salario_mensual * 1.10)

    } else if (antiguedad => 5 && antiguedad < 10){

        utlidad_anual = 12 * (salario_mensual * 1.15)

    } else if (antiguedad => 10){

        utlidad_anual = 12 * (salario_mensual * 1.20)

    } else if (antiguedad <=0){

        alert("Escriba un periodo mayor a cero meses")

    }

    if (utlidad_anual > 0 ){

        document.querySelector("#output4").textContent = "La cantidad totdal de la utilidad anual es de " + utlidad_anual

    }

}