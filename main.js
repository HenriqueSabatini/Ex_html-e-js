const form = document.getElementById('form-numeros');

    function validaNumero(nA, nB) {
        return nB > nA
    }

    form.addEventListener('submit', function (e) {
        let formValido
        e.preventDefault();

    const nA = document.getElementById('numeroA').value;
    const nB = document.getElementById('numeroB').value;
    const mensagemSucesso = `Parabens numero valido!!! \n O valor B: ${nB} é maior que o valor A: ${nA}`;

    formValido = validaNumero(nA, nB)
    if (formValido){
        alert(mensagemSucesso);

        nA.value = '';
        nB.value = '';
    }else if (nB <= nA) {
        alert("Não valido! A maior ou igual a B!");
    } 

}) 

console.log(form);