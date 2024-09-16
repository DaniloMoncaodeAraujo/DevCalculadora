function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + caracter
}

function limparTela(){
    document.querySelector('.display').value = ''
}

function calcular(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorInput)
} 

function inverte(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput * -1
}

function validarInput(input) {
    // Regex que permite apenas números, operadores matemáticos e pontos
    const regex = /^[0-9+\-*/.]*$/;

    // Se o valor atual não casar com a regex, remove o último caractere
    if (!regex.test(input.value)) {
        input.value = input.value.slice(0, -1);
    }
}