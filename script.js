let botaoEnviarImc = document.getElementById("enviarImc");
let campoPeso = document.getElementById("peso");
let campoAltura = document.getElementById("altura");
let botaoResetImc = document.getElementById("resetImc");
let resultadoImc = document.getElementById("resultadoImc");


botaoEnviarImc.addEventListener("click", function(event) {
    event.preventDefault();

    let peso = Number(campoPeso.value);
    let altura = Number(campoAltura.value);

    if(campoPeso.value === "" || campoAltura.value ==="" ) {
        document.getElementById("resultadoImc").textContent = "Por favor informe seu peso e sua altura.";
    
    } else if (peso <= 0 || altura <= 0) {
        document.getElementById("resultadoImc").textContent = "Informe peso e altura maior que zero."

    }else {
        let Imc = peso / (altura * altura);
        let classifcacao = ""; {
            if(Imc < 18.5) {
              classifcacao = 'Você está abaixo do peso.';
            } else if(Imc >= 18.5 && Imc < 25) {
                 classifcacao = 'Você está no peso normal saudavel.';
            } else if(Imc >= 25.0 && Imc < 29.9) {
                classifcacao = 'Você está com sobrepeso.';
            };
        }
         resultadoImc.textContent = `Seu índice de massa corporal é ${Imc.toFixed(2)} ${classifcacao}`;
    };
});

botaoResetImc.addEventListener("click", function() {
    campoPeso.value = "";
    campoAltura.value = "";
    resultadoImc.textContent = "";
});