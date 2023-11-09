const form = document.getElementById('form-numeros');

    function validaNumero(nA, nB) {
        return nB > nA
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();    

    const nA = parseInt(document.getElementById('numeroA').value); 
    const nB = parseInt(document.getElementById('numeroB').value); 
    const mensagemSucesso = `Parabens numero valido!!! \n O valor B: ${nB} é maior que o valor A: ${nA}`;

    formValido = validaNumero(nA, nB)
    if (formValido){
        alert(mensagemSucesso);

    document.getElementById('numeroA').value;
    document.getElementById('numeroB').value;
    }else if (nB <= nA) {
        alert("Não valido! A maior ou igual a B!");
    } 
    document.getElementById('numeroA').value = '';
    document.getElementById('numeroB').value = '';

}) 

console.log(form);
