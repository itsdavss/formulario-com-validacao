const botaoEnviar = document.querySelector("input[type='submit']")

botaoEnviar.addEventListener('click', verificarInput)

function verificarInput() {
    let listaInput = document.querySelectorAll('.texto')
    let index = 0

    listaInput.forEach(input => {
        let itemLista = document.querySelectorAll('li')[index]
        valorInput = input.value
        
        if (valorInput === '') {
            itemLista.classList.remove('valido')
            itemLista.classList.add('invalido')
        }else {
            itemLista.classList.add('valido')
            itemLista.classList.remove('invalido')
        }

        index++
    });
}
        