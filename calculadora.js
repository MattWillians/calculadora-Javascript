//Funções da calculadora

function calcularSoma(numero1, numero2){

    return numero1 + numero2;

}

function calcularSubtracao(numero1, numero2){

    return numero1 - numero2;

}

function calcularDivsao(numero1, numero2){

    return numero1 / numero2;

}

function calcularMultiplicacao(numero1, numero2){

    return numero1 * numero2;

}

//Calculadora

while (true){

    const comeco = prompt(`DIGITE N PARA INICIAR | E DIGITE ''S'' para sair`);

    if (comeco == "S"){
        break;
    } else if (comeco == "N"){
        
        const qualConta = Number(prompt(`ADIÇÃO-1 | SUBTRAÇÃO-2 | DIVISÃO-3 | MULTIPLICAÇÃO-4`));
        
        switch (qualConta){

            case 1:
                
                n1 = Number(prompt("digite um numero a ser somado"));
                n2 = Number(prompt("digite outro numero a ser somado"));
                alert(`${n1} + ${n2} = ${calcularSoma(n1, n2)}`);
                break;
    
            case 2:
    
                n1 = Number(prompt("digite um numero a ser subtraido"));
                n2 = Number(prompt("digite outro numero a ser subtraido"));
                alert(`${n1} - ${n2} = ${calcularSubtracao(n1, n2)}`);
                break;
    
            case 3:
    
                n1 = Number(prompt("digite um numero a ser dividido"));
                n2 = Number(prompt("digite outro numero a ser dividido"));
                alert(`${n1} / ${n2} = ${calcularDivsao(n1, n2)}`);
                break;
    
            case 4:
    
                n1 = Number(prompt("digite um numero a ser multiplicado"));
                n2 = Number(prompt("digite outro numero a ser multiplicado"));
                alert(`${n1} x ${n2} = ${calcularMultiplicacao(n1, n2)}`);
                break;
    
            default:
                alert("Opção Inexistente");
        }
    }
}

