
  
function calcularMayor(){
    var n1=document.getElementById("1numero").value;
    var n2=document.getElementById("2numero").value;
    var n3=document.getElementById("3numero").value;
    console.log("1er: "+numero1+", 2do: "+numero2+", 3er: "+numero3");

    if(numero1<numero2){
        if(numero2<numero3){
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero3;
        }else{
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero2;
        }
    }else{
        if(numero1<numero3){
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero3;
        }else{
            document.getElementById("resultado").innerHTML="El número mayor es: "+numero1;
        }
    }
}
