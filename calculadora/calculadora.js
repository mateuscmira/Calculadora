function calc() {

    let operacao = document.getElementById('operacao').value;
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
   
   
    let resultado;
    switch(operacao) {

        case '+':
            resultado = num1 + num2;
            break;
         case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                alert('Este numero não pode dividir')
                return;
            }
            resultado = num1 / num2;
            break;

    }

    document.getElementById('resultado').textContent = resultado;

}
